/* Copyright (c) 2017, 2023, Oracle and/or its affiliates. */

/******************************************************************************
 *
 * This software is dual-licensed to you under the Universal Permissive License
 * (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl and Apache License
 * 2.0 as shown at https://www.apache.org/licenses/LICENSE-2.0. You may choose
 * either license.
 *
 * If you elect to accept the software under the Apache License, Version 2.0,
 * the following applies:
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * NAME
 *   111. rowidProcedureBindAsString_bindinout.js
 *
 * DESCRIPTION
 *   Testing rowid plsql bind as String.
 *
 *****************************************************************************/

'use strict';

const oracledb = require('oracledb');
const assert   = require('assert');
const dbConfig = require('./dbconfig.js');

describe('111. rowidProcedureBindAsString_bindinout.js', function() {
  let connection = null;
  const tableName = "nodb_rowid_plsql_inout";
  let insertID = 1;

  const proc_create_table = "BEGIN \n" +
                          "    DECLARE \n" +
                          "        e_table_missing EXCEPTION; \n" +
                          "        PRAGMA EXCEPTION_INIT(e_table_missing, -00942);\n" +
                          "    BEGIN \n" +
                          "        EXECUTE IMMEDIATE ('DROP TABLE " + tableName + " PURGE' ); \n" +
                          "    EXCEPTION \n" +
                          "        WHEN e_table_missing \n" +
                          "        THEN NULL; \n" +
                          "    END; \n" +
                          "    EXECUTE IMMEDIATE ( ' \n" +
                          "        CREATE TABLE " + tableName + " ( \n" +
                          "            ID       NUMBER, \n" +
                          "            content  ROWID \n" +
                          "        ) \n" +
                          "    '); \n" +
                          "END;  ";
  const drop_table = "DROP TABLE " + tableName + " PURGE";

  before('get connection and create table', async function() {
    connection  = await oracledb.getConnection(dbConfig);
    await connection.execute(proc_create_table);
  });

  after('release connection', async function() {
    await connection.execute(drop_table);
    await connection.close();
  });

  beforeEach(function() {
    insertID++;
  });

  describe('111.1 PROCEDURE BIND_INOUT as rowid', function() {
    const proc_create = "CREATE OR REPLACE PROCEDURE nodb_rowid_bind_inout (id_in IN NUMBER, content IN OUT ROWID)\n" +
                      "AS \n" +
                      "BEGIN \n" +
                      "    insert into " + tableName + " (id, content) values (id_in, CHARTOROWID(content)); \n" +
                      "    select content into content from " + tableName + " where id = id_in; \n" +
                      "END nodb_rowid_bind_inout; ";
    const proc_execute = "BEGIN nodb_rowid_bind_inout (:i, :c); END;";
    const proc_drop = "DROP PROCEDURE nodb_rowid_bind_inout";

    before('create procedure', async function() {
      await connection.execute(proc_create);
    });

    after('drop procedure', async function() {
      await connection.execute(proc_drop);
    });

    it('111.1.1 works with null', async function() {
      await procedureBindInout(proc_execute, null, null);
    });

    it('111.1.2 works with empty string', async function() {
      await procedureBindInout(proc_execute, "", null);
    });

    it('111.1.3 works with undefined', async function() {
      await procedureBindInout(proc_execute, undefined, null);
    });

    it('111.1.4 works with NaN', async function() {
      const content = NaN;
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: content, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000 }
      };
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-011:/ // 'NJS-011: encountered bind value and type mismatch'
      );
    });

    it('111.1.5 works with extended rowid', async function() {
      await procedureBindInout(proc_execute, "AAAB12AADAAAAwPAAA", "AAAB12AADAAAAwPAAA");
    });

    it('111.1.6 works with restricted rowid', async function() {
      await procedureBindInout(proc_execute, "00000DD5.0000.0101", "00000DD5.0000.0101");
    });

    it('111.1.7 works with string 0', async function() {
      await procedureBindInout(proc_execute, "0", "00000000.0000.0000");
    });

    it('111.1.8 works with number 0', async function() {
      const content = 0;
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: content, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000 }
      };

      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-011:/ // 'NJS-011: encountered bind value and type mismatch'
      );
    });

    it('111.1.9 works with default bind type/dir - extended rowid', async function() {
      await procedureBindInout_default(proc_execute, "AAAB1+AADAAAAwPAAA", "AAAB1+AADAAAAwPAAA");
    });

    it('111.1.10 works with default bind type/dir - null value', async function() {
      await procedureBindInout_default(proc_execute, null, null);
    });

    it('111.1.11 works with default bind type/dir - empty string', async function() {
      await procedureBindInout_default(proc_execute, "", null);
    });

    it('111.1.12 works with default bind type/dir - undefined', async function() {
      await procedureBindInout_default(proc_execute, undefined, null);
    });

    it('111.1.13 bind error: NJS-037', async function() {
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: [0], type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxArraySize: 1000  }
      };
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-037:/ // 'NJS-037: invalid data type at array index 0 for bind ":c"'
      );
    });

    it('111.1.14 bind error: NJS-052', async function() {
      const bindVar = [ insertID, { val: [0], type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxArraySize: 1000  }];
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-052:/ // 'invalid data type at array index 0 for bind position 2'
      );

    });

  });

  describe('111.2 PROCEDURE BIND_INOUT as string', function() {
    const proc_create = "CREATE OR REPLACE PROCEDURE nodb_rowid_bind_inout (id_in IN NUMBER, content IN OUT VARCHAR2)\n" +
                      "AS \n" +
                      "BEGIN \n" +
                      "    insert into " + tableName + " (id, content) values (id_in, CHARTOROWID(content)); \n" +
                      "    select content into content from " + tableName + " where id = id_in; \n" +
                      "END nodb_rowid_bind_inout; ";
    const proc_execute = "BEGIN nodb_rowid_bind_inout (:i, :c); END;";
    const proc_drop = "DROP PROCEDURE nodb_rowid_bind_inout";

    before('create procedure', async function() {
      await connection.execute(proc_create);
    });

    after('drop procedure', async function() {
      await connection.execute(proc_drop);
    });

    it('111.2.1 works with null', async function() {
      await procedureBindInout(proc_execute, null, null);
    });

    it('111.2.2 works with empty string', async function() {
      await procedureBindInout(proc_execute, "", null);
    });

    it('111.2.3 works with undefined', async function() {
      await procedureBindInout(proc_execute, undefined, null);
    });

    it('111.2.4 works with NaN', async function() {
      const content = NaN;
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: content, type: oracledb.STRING, dir: oracledb.BIND_INOUT }
      };
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-011:/ // 'NJS-011: encountered bind value and type mismatch'
      );

    });

    it('111.2.5 works with extended rowid', async function() {
      await procedureBindInout(proc_execute, "AAAB12AADAAAAwPAAA", "AAAB12AADAAAAwPAAA");
    });

    it('111.2.6 works with restricted rowid', async function() {
      await procedureBindInout(proc_execute, "00000DD5.0000.0101", "00000DD5.0000.0101");
    });

    it('111.2.7 works with string 0', async function() {
      await procedureBindInout(proc_execute, "0", "00000000.0000.0000");
    });

    it('111.2.8 works with number 0', async function() {
      const content = 0;
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: content, type: oracledb.STRING, dir: oracledb.BIND_INOUT }
      };
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-011:/ // 'NJS-011: encountered bind value and type mismatch'
      );
    });

    it('111.2.9 works with default bind type/dir - extended rowid', async function() {
      await procedureBindInout_default(proc_execute, "AAAB1+AADAAAAwPAAA", "AAAB1+AADAAAAwPAAA");
    });

    it('111.2.10 works with default bind type/dir - null value', async function() {
      await procedureBindInout_default(proc_execute, null, null);
    });

    it('111.2.11 works with default bind type/dir - empty string', async function() {
      await procedureBindInout_default(proc_execute, "", null);
    });

    it('111.2.12 works with default bind type/dir - undefined', async function() {
      await procedureBindInout_default(proc_execute, undefined, null);
    });

    it('111.2.13 bind error: NJS-037', async function() {
      const bindVar = {
        i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
        c: { val: [0], type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxArraySize: 1000  }
      };
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-037:/ // 'NJS-037: invalid data type at array index 0 for bind ":c"'
      );
    });

    it('111.2.14 bind error: NJS-052', async function() {
      const bindVar = [ insertID, { val: [0], type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxArraySize: 1000  }];
      await assert.rejects(
        async () => await connection.execute(proc_execute, bindVar),
        /NJS-052:/ // 'NJS-052: invalid data type at array index 0 for bind position 2'
      );
    });

  });

  describe('111.3 PROCEDURE BIND_IN, UPDATE', function() {
    const proc_create = "CREATE OR REPLACE PROCEDURE nodb_rowid_bind_1083 (id_in IN NUMBER, content_1 IN OUT ROWID, content_2 IN OUT ROWID)\n" +
                      "AS \n" +
                      "BEGIN \n" +
                      "    insert into " + tableName + " (id, content) values (id_in, CHARTOROWID(content_1)); \n" +
                      "    update " + tableName + " set content = content_2 where id = id_in; \n" +
                      "    select content into content_1 from " + tableName + " where id = id_in; \n" +
                      "END nodb_rowid_bind_1083; ";
    const proc_execute = "BEGIN nodb_rowid_bind_1083 (:i, :c1, :c2); END;";
    const proc_drop = "DROP PROCEDURE nodb_rowid_bind_1083";

    before('create procedure', async function() {
      await connection.execute(proc_create);
    });

    after('drop procedure', async function() {
      await connection.execute(proc_drop);
    });

    it('111.3.1 update null with rowid', async function() {
      await procedureBindInout_update(proc_execute, null, "AAAB12AADAAAAwPAAA", "AAAB12AADAAAAwPAAA");
    });

    it('111.3.2 update empty string with rowid', async function() {
      await procedureBindInout_update(proc_execute, "", "AAAB12AADAAAAwPAAA", "AAAB12AADAAAAwPAAA");
    });

    it('111.3.3 update undefined with rowid', async function() {
      await procedureBindInout_update(proc_execute, undefined, "AAAB12AADAAAAwPAAA", "AAAB12AADAAAAwPAAA");
    });

    it('111.3.4 works with default bind type/dir', async function() {
      await procedureBindInout_update(proc_execute, "AAAB1+AADAAAAwPAAA", "0", "0");
    });

    it('111.3.5 works with default bind type/dir - null value', async function() {
      await procedureBindInout_update_default(proc_execute, "AAAB12AADAAAAwPAAA", null, null);
    });

    it('111.3.6 works with default bind type/dir - empty string', async function() {
      await procedureBindInout_update_default(proc_execute, "AAAB12AADAAAAwPAAA", "", null);
    });

    it('111.3.7 works with default bind type/dir - undefined', async function() {
      await procedureBindInout_update_default(proc_execute, "AAAB12AADAAAAwPAAA", undefined, null);
    });

  });

  const procedureBindInout = async function(proc_execute, content_in, expected) {
    const bindVar_out = {
      i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
      c: { val: content_in, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000 }
    };
    const result = await connection.execute(proc_execute, bindVar_out);
    assert(result);
    const resultVal = result.outBinds.c;
    assert.strictEqual(resultVal, expected);
  };

  const procedureBindInout_default = async function(proc_execute, content_in, expected) {
    const bindVar_out = {
      i: insertID,
      c: { val: content_in, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000  }
    };
    const result = await connection.execute(proc_execute, bindVar_out);
    assert(result);
    const resultVal = result.outBinds.c;
    assert.strictEqual(resultVal, expected);
  };

  const procedureBindInout_update = async function(proc_execute, content_1, content_2, expected) {
    const bindVar_in = {
      i: { val: insertID, type: oracledb.NUMBER, dir: oracledb.BIND_IN },
      c1: { val: content_1, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000  },
      c2: { val: content_2, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000  }
    };
    const result = await connection.execute(proc_execute, bindVar_in);
    const resultVal = result.outBinds.c2;
    assert.strictEqual(resultVal, expected);
  };

  const procedureBindInout_update_default = async function(proc_execute, content_1, content_2, expected) {
    const bindVar_in = {
      i: insertID,
      c1: { val: content_1, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000  },
      c2: { val: content_2, type: oracledb.STRING, dir: oracledb.BIND_INOUT, maxSize: 1000  }
    };
    const result = await connection.execute(proc_execute, bindVar_in);
    assert(result);
    const resultVal = result.outBinds.c2;
    assert.strictEqual(resultVal, expected);
  };

});
