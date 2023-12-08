// Copyright (c) 2022, 2023, Oracle and/or its affiliates.

//-----------------------------------------------------------------------------
//
// This software is dual-licensed to you under the Universal Permissive License
// (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl and Apache License
// 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose
// either license.
//
// If you elect to accept the software under the Apache License, Version 2.0,
// the following applies:
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------

'use strict';

const constants = require("../constants.js");
const Message = require("./base.js");

/**
 * Does Datatype Negotiation
 *
 * @class DataTypeMessage
 * @extends {Message}
 *
 */
class DataTypeMessage extends Message {

  processMessage(buf, messageType) {
    if (messageType === constants.TNS_MSG_TYPE_DATA_TYPES) {
      while (true) {        // eslint-disable-line
        const dataType = buf.readUInt16BE();
        if (dataType === 0)
          break;
        const convDataType = buf.readUInt16BE();
        if (convDataType !== 0)
          buf.skipBytes(4);
      }
    } else {
      super.processMessage(buf, messageType);
    }
  }

  encode(buf) {
    buf.writeUInt8(constants.TNS_MSG_TYPE_DATA_TYPES);
    buf.writeUInt16LE(constants.TNS_CHARSET_UTF8);
    buf.writeUInt16LE(constants.TNS_CHARSET_UTF8);
    buf.writeUInt8(constants.TNS_ENCODING_MULTI_BYTE |
      constants.TNS_ENCODING_CONV_LENGTH);
    buf.writeBytesWithLength(buf.caps.compileCaps);
    buf.writeBytesWithLength(buf.caps.runtimeCaps);
    for (const val of dataTypes) {
      buf.writeUInt16BE(val[0]);
      buf.writeUInt16BE(val[1]);
      buf.writeUInt16BE(val[2]);
      buf.writeUInt16BE(0);
    }
    buf.writeUInt16BE(0);
  }

}

const dataTypes = [
  [constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_NUMBER, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_LONG, constants.TNS_DATA_TYPE_LONG, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DATE, constants.TNS_DATA_TYPE_DATE, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_RAW, constants.TNS_DATA_TYPE_RAW, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LONG_RAW, constants.TNS_DATA_TYPE_LONG_RAW, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UB2, constants.TNS_DATA_TYPE_UB2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UB4, constants.TNS_DATA_TYPE_UB4, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SB1, constants.TNS_DATA_TYPE_SB1, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_SB2, constants.TNS_DATA_TYPE_SB2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SB4, constants.TNS_DATA_TYPE_SB4, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SWORD, constants.TNS_DATA_TYPE_SWORD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UWORD, constants.TNS_DATA_TYPE_UWORD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PTRB, constants.TNS_DATA_TYPE_PTRB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PTRW, constants.TNS_DATA_TYPE_PTRW, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TIDDEF, constants.TNS_DATA_TYPE_TIDDEF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ROWID, constants.TNS_DATA_TYPE_ROWID, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AMS, constants.TNS_DATA_TYPE_AMS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BRN, constants.TNS_DATA_TYPE_BRN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CWD, constants.TNS_DATA_TYPE_CWD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OAC122, constants.TNS_DATA_TYPE_OAC122, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OER8, constants.TNS_DATA_TYPE_OER8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FUN, constants.TNS_DATA_TYPE_FUN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AUA, constants.TNS_DATA_TYPE_AUA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RXH7, constants.TNS_DATA_TYPE_RXH7, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_NA6, constants.TNS_DATA_TYPE_NA6, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BRP, constants.TNS_DATA_TYPE_BRP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BRV, constants.TNS_DATA_TYPE_BRV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KVA, constants.TNS_DATA_TYPE_KVA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CLS, constants.TNS_DATA_TYPE_CLS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CUI, constants.TNS_DATA_TYPE_CUI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DFN, constants.TNS_DATA_TYPE_DFN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DQR, constants.TNS_DATA_TYPE_DQR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSC, constants.TNS_DATA_TYPE_DSC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EXE, constants.TNS_DATA_TYPE_EXE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FCH, constants.TNS_DATA_TYPE_FCH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GBV, constants.TNS_DATA_TYPE_GBV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GEM, constants.TNS_DATA_TYPE_GEM, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GIV, constants.TNS_DATA_TYPE_GIV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OKG, constants.TNS_DATA_TYPE_OKG, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_HMI, constants.TNS_DATA_TYPE_HMI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INO, constants.TNS_DATA_TYPE_INO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LNF, constants.TNS_DATA_TYPE_LNF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ONT, constants.TNS_DATA_TYPE_ONT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OPE, constants.TNS_DATA_TYPE_OPE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OSQ, constants.TNS_DATA_TYPE_OSQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SFE, constants.TNS_DATA_TYPE_SFE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SPF, constants.TNS_DATA_TYPE_SPF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_VSN, constants.TNS_DATA_TYPE_VSN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UD7, constants.TNS_DATA_TYPE_UD7, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSA, constants.TNS_DATA_TYPE_DSA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PIN, constants.TNS_DATA_TYPE_PIN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PFN, constants.TNS_DATA_TYPE_PFN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PPT, constants.TNS_DATA_TYPE_PPT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_STO, constants.TNS_DATA_TYPE_STO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ARC, constants.TNS_DATA_TYPE_ARC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MRS, constants.TNS_DATA_TYPE_MRS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MRT, constants.TNS_DATA_TYPE_MRT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MRG, constants.TNS_DATA_TYPE_MRG, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MRR, constants.TNS_DATA_TYPE_MRR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MRC, constants.TNS_DATA_TYPE_MRC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_VER, constants.TNS_DATA_TYPE_VER, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LON2, constants.TNS_DATA_TYPE_LON2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INO2, constants.TNS_DATA_TYPE_INO2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ALL, constants.TNS_DATA_TYPE_ALL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UDB, constants.TNS_DATA_TYPE_UDB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQI, constants.TNS_DATA_TYPE_AQI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ULB, constants.TNS_DATA_TYPE_ULB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ULD, constants.TNS_DATA_TYPE_ULD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SID, constants.TNS_DATA_TYPE_SID, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_NA7, constants.TNS_DATA_TYPE_NA7, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AL7, constants.TNS_DATA_TYPE_AL7, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_K2RPC, constants.TNS_DATA_TYPE_K2RPC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XDP, constants.TNS_DATA_TYPE_XDP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OKO8, constants.TNS_DATA_TYPE_OKO8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UD12, constants.TNS_DATA_TYPE_UD12, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AL8, constants.TNS_DATA_TYPE_AL8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LFOP, constants.TNS_DATA_TYPE_LFOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FCRT, constants.TNS_DATA_TYPE_FCRT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DNY, constants.TNS_DATA_TYPE_DNY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OPR, constants.TNS_DATA_TYPE_OPR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PLS, constants.TNS_DATA_TYPE_PLS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XID, constants.TNS_DATA_TYPE_XID, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TXN, constants.TNS_DATA_TYPE_TXN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DCB, constants.TNS_DATA_TYPE_DCB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CCA, constants.TNS_DATA_TYPE_CCA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_WRN, constants.TNS_DATA_TYPE_WRN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TLH, constants.TNS_DATA_TYPE_TLH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TOH, constants.TNS_DATA_TYPE_TOH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FOI, constants.TNS_DATA_TYPE_FOI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SID2, constants.TNS_DATA_TYPE_SID2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TCH, constants.TNS_DATA_TYPE_TCH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PII, constants.TNS_DATA_TYPE_PII, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PFI, constants.TNS_DATA_TYPE_PFI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PPU, constants.TNS_DATA_TYPE_PPU, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PTE, constants.TNS_DATA_TYPE_PTE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RXH8, constants.TNS_DATA_TYPE_RXH8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_N12, constants.TNS_DATA_TYPE_N12, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AUTH, constants.TNS_DATA_TYPE_AUTH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KVAL, constants.TNS_DATA_TYPE_KVAL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FGI, constants.TNS_DATA_TYPE_FGI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSY, constants.TNS_DATA_TYPE_DSY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYR8, constants.TNS_DATA_TYPE_DSYR8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYH8, constants.TNS_DATA_TYPE_DSYH8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYL, constants.TNS_DATA_TYPE_DSYL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYT8, constants.TNS_DATA_TYPE_DSYT8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYV8, constants.TNS_DATA_TYPE_DSYV8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYP, constants.TNS_DATA_TYPE_DSYP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYF, constants.TNS_DATA_TYPE_DSYF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYK, constants.TNS_DATA_TYPE_DSYK, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYY, constants.TNS_DATA_TYPE_DSYY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYQ, constants.TNS_DATA_TYPE_DSYQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYC, constants.TNS_DATA_TYPE_DSYC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYA, constants.TNS_DATA_TYPE_DSYA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OT8, constants.TNS_DATA_TYPE_OT8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYTY, constants.TNS_DATA_TYPE_DSYTY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQE, constants.TNS_DATA_TYPE_AQE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KV, constants.TNS_DATA_TYPE_KV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQD, constants.TNS_DATA_TYPE_AQD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQ8, constants.TNS_DATA_TYPE_AQ8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RFS, constants.TNS_DATA_TYPE_RFS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RXH10, constants.TNS_DATA_TYPE_RXH10, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPN, constants.TNS_DATA_TYPE_KPN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNR, constants.TNS_DATA_TYPE_KPDNR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYD, constants.TNS_DATA_TYPE_DSYD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYS, constants.TNS_DATA_TYPE_DSYS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYR, constants.TNS_DATA_TYPE_DSYR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYH, constants.TNS_DATA_TYPE_DSYH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYT, constants.TNS_DATA_TYPE_DSYT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DSYV, constants.TNS_DATA_TYPE_DSYV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQM, constants.TNS_DATA_TYPE_AQM, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OER11, constants.TNS_DATA_TYPE_OER11, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQL, constants.TNS_DATA_TYPE_AQL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OTC, constants.TNS_DATA_TYPE_OTC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KFNO, constants.TNS_DATA_TYPE_KFNO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KFNP, constants.TNS_DATA_TYPE_KFNP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KGT8, constants.TNS_DATA_TYPE_KGT8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RASB4, constants.TNS_DATA_TYPE_RASB4, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RAUB2, constants.TNS_DATA_TYPE_RAUB2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RAUB1, constants.TNS_DATA_TYPE_RAUB1, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RATXT, constants.TNS_DATA_TYPE_RATXT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RSSB4, constants.TNS_DATA_TYPE_RSSB4, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RSUB2, constants.TNS_DATA_TYPE_RSUB2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RSUB1, constants.TNS_DATA_TYPE_RSUB1, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RSTXT, constants.TNS_DATA_TYPE_RSTXT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RIDL, constants.TNS_DATA_TYPE_RIDL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GLRDD, constants.TNS_DATA_TYPE_GLRDD, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GLRDG, constants.TNS_DATA_TYPE_GLRDG, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_GLRDC, constants.TNS_DATA_TYPE_GLRDC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OKO, constants.TNS_DATA_TYPE_OKO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DPP, constants.TNS_DATA_TYPE_DPP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DPLS, constants.TNS_DATA_TYPE_DPLS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DPMOP, constants.TNS_DATA_TYPE_DPMOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_STAT, constants.TNS_DATA_TYPE_STAT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RFX, constants.TNS_DATA_TYPE_RFX, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FAL, constants.TNS_DATA_TYPE_FAL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CKV, constants.TNS_DATA_TYPE_CKV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DRCX, constants.TNS_DATA_TYPE_DRCX, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KGH, constants.TNS_DATA_TYPE_KGH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQO, constants.TNS_DATA_TYPE_AQO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OKGT, constants.TNS_DATA_TYPE_OKGT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPFC, constants.TNS_DATA_TYPE_KPFC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_FE2, constants.TNS_DATA_TYPE_FE2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SPFP, constants.TNS_DATA_TYPE_SPFP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DPULS, constants.TNS_DATA_TYPE_DPULS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQA, constants.TNS_DATA_TYPE_AQA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPBF, constants.TNS_DATA_TYPE_KPBF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TSM, constants.TNS_DATA_TYPE_TSM, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_MSS, constants.TNS_DATA_TYPE_MSS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPC, constants.TNS_DATA_TYPE_KPC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CRS, constants.TNS_DATA_TYPE_CRS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KKS, constants.TNS_DATA_TYPE_KKS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSP, constants.TNS_DATA_TYPE_KSP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSPTOP, constants.TNS_DATA_TYPE_KSPTOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSPVAL, constants.TNS_DATA_TYPE_KSPVAL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PSS, constants.TNS_DATA_TYPE_PSS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_NLS, constants.TNS_DATA_TYPE_NLS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ALS, constants.TNS_DATA_TYPE_ALS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSDEVTVAL, constants.TNS_DATA_TYPE_KSDEVTVAL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSDEVTTOP, constants.TNS_DATA_TYPE_KSDEVTTOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPSPP, constants.TNS_DATA_TYPE_KPSPP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KOL, constants.TNS_DATA_TYPE_KOL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LST, constants.TNS_DATA_TYPE_LST, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ACX, constants.TNS_DATA_TYPE_ACX, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SCS, constants.TNS_DATA_TYPE_SCS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RXH, constants.TNS_DATA_TYPE_RXH, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNS, constants.TNS_DATA_TYPE_KPDNS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDCN, constants.TNS_DATA_TYPE_KPDCN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPNNS, constants.TNS_DATA_TYPE_KPNNS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPNCN, constants.TNS_DATA_TYPE_KPNCN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPS, constants.TNS_DATA_TYPE_KPS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_APINF, constants.TNS_DATA_TYPE_APINF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TEN, constants.TNS_DATA_TYPE_TEN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSCS, constants.TNS_DATA_TYPE_XSSCS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSSO, constants.TNS_DATA_TYPE_XSSSO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSAO, constants.TNS_DATA_TYPE_XSSAO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KSRPC, constants.TNS_DATA_TYPE_KSRPC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KVL, constants.TNS_DATA_TYPE_KVL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSDEF, constants.TNS_DATA_TYPE_XSSDEF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PDQCINV, constants.TNS_DATA_TYPE_PDQCINV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PDQIDC, constants.TNS_DATA_TYPE_PDQIDC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDQCSTA, constants.TNS_DATA_TYPE_KPDQCSTA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPRS, constants.TNS_DATA_TYPE_KPRS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDQIDC, constants.TNS_DATA_TYPE_KPDQIDC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RTSTRM, constants.TNS_DATA_TYPE_RTSTRM, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SESSGET, constants.TNS_DATA_TYPE_SESSGET, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SESSREL, constants.TNS_DATA_TYPE_SESSREL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SESSRET, constants.TNS_DATA_TYPE_SESSRET, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SCN6, constants.TNS_DATA_TYPE_SCN6, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KECPA, constants.TNS_DATA_TYPE_KECPA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KECPP, constants.TNS_DATA_TYPE_KECPP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SXA, constants.TNS_DATA_TYPE_SXA, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KVARR, constants.TNS_DATA_TYPE_KVARR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPNGN, constants.TNS_DATA_TYPE_KPNGN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BINARY_INTEGER, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_FLOAT, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_STR, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_VNU, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_PDN, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_VCS, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_VBI, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OAC9, constants.TNS_DATA_TYPE_OAC9, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UIN, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_SLS, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_LVC, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_LVB, constants.TNS_DATA_TYPE_RAW, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CHAR, constants.TNS_DATA_TYPE_CHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AVC, constants.TNS_DATA_TYPE_CHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BINARY_FLOAT, constants.TNS_DATA_TYPE_BINARY_FLOAT,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BINARY_DOUBLE, constants.TNS_DATA_TYPE_BINARY_DOUBLE,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CURSOR, constants.TNS_DATA_TYPE_CURSOR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RDD, constants.TNS_DATA_TYPE_ROWID, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OSL, constants.TNS_DATA_TYPE_OSL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EXT_NAMED, constants.TNS_DATA_TYPE_INT_NAMED, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INT_NAMED, constants.TNS_DATA_TYPE_INT_NAMED, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EXT_REF, constants.TNS_DATA_TYPE_INT_REF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INT_REF, constants.TNS_DATA_TYPE_INT_REF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CLOB, constants.TNS_DATA_TYPE_CLOB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BLOB, constants.TNS_DATA_TYPE_BLOB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BFILE, constants.TNS_DATA_TYPE_BFILE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CFILE, constants.TNS_DATA_TYPE_CFILE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_RSET, constants.TNS_DATA_TYPE_CURSOR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_JSON, constants.TNS_DATA_TYPE_JSON, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DJSON, constants.TNS_DATA_TYPE_DJSON, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CLV, constants.TNS_DATA_TYPE_CLV, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DTR, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_DUN, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_DOP, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_VST, constants.TNS_DATA_TYPE_VARCHAR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ODT, constants.TNS_DATA_TYPE_DATE, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_DOL, constants.TNS_DATA_TYPE_NUMBER, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_TIME, constants.TNS_DATA_TYPE_TIME, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TIME_TZ, constants.TNS_DATA_TYPE_TIME_TZ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TIMESTAMP, constants.TNS_DATA_TYPE_TIMESTAMP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TIMESTAMP_TZ, constants.TNS_DATA_TYPE_TIMESTAMP_TZ,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INTERVAL_YM, constants.TNS_DATA_TYPE_INTERVAL_YM,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_INTERVAL_DS, constants.TNS_DATA_TYPE_INTERVAL_DS,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EDATE, constants.TNS_DATA_TYPE_DATE, constants.TNS_TYPE_REP_ORACLE],
  [constants.TNS_DATA_TYPE_ETIME, constants.TNS_DATA_TYPE_ETIME, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ETTZ, constants.TNS_DATA_TYPE_ETTZ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ESTAMP, constants.TNS_DATA_TYPE_ESTAMP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ESTZ, constants.TNS_DATA_TYPE_ESTZ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EIYM, constants.TNS_DATA_TYPE_EIYM, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_EIDS, constants.TNS_DATA_TYPE_EIDS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DCLOB, constants.TNS_DATA_TYPE_CLOB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DBLOB, constants.TNS_DATA_TYPE_BLOB, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_DBFILE, constants.TNS_DATA_TYPE_BFILE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UROWID, constants.TNS_DATA_TYPE_UROWID, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TIMESTAMP_LTZ, constants.TNS_DATA_TYPE_TIMESTAMP_LTZ,
    constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_ESITZ, constants.TNS_DATA_TYPE_TIMESTAMP_LTZ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UB8, constants.TNS_DATA_TYPE_UB8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_PNTY, constants.TNS_DATA_TYPE_INT_NAMED, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_BOOLEAN, constants.TNS_DATA_TYPE_BOOLEAN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSNSOP, constants.TNS_DATA_TYPE_XSNSOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSATTR, constants.TNS_DATA_TYPE_XSATTR, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSNS, constants.TNS_DATA_TYPE_XSNS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UB1ARRAY, constants.TNS_DATA_TYPE_UB1ARRAY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SESSSTATE, constants.TNS_DATA_TYPE_SESSSTATE, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AC_REPLAY, constants.TNS_DATA_TYPE_AC_REPLAY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AC_CONT, constants.TNS_DATA_TYPE_AC_CONT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_IMPLRES, constants.TNS_DATA_TYPE_IMPLRES, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OER19, constants.TNS_DATA_TYPE_OER19, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TXT, constants.TNS_DATA_TYPE_TXT, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSESSNS, constants.TNS_DATA_TYPE_XSSESSNS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSATTOP, constants.TNS_DATA_TYPE_XSATTOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSCREOP, constants.TNS_DATA_TYPE_XSCREOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSDETOP, constants.TNS_DATA_TYPE_XSDETOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSDESOP, constants.TNS_DATA_TYPE_XSDESOP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSETSP, constants.TNS_DATA_TYPE_XSSETSP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSIDP, constants.TNS_DATA_TYPE_XSSIDP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSPRIN, constants.TNS_DATA_TYPE_XSPRIN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSKVL, constants.TNS_DATA_TYPE_XSKVL, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSSSDEF2, constants.TNS_DATA_TYPE_XSSSDEF2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSNSOP2, constants.TNS_DATA_TYPE_XSNSOP2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_XSNS2, constants.TNS_DATA_TYPE_XSNS2, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNREQ, constants.TNS_DATA_TYPE_KPDNREQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNRNF, constants.TNS_DATA_TYPE_KPDNRNF, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPNGNC, constants.TNS_DATA_TYPE_KPNGNC, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPNRI, constants.TNS_DATA_TYPE_KPNRI, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQENQ, constants.TNS_DATA_TYPE_AQENQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQDEQ, constants.TNS_DATA_TYPE_AQDEQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_AQJMS, constants.TNS_DATA_TYPE_AQJMS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNRPAY, constants.TNS_DATA_TYPE_KPDNRPAY, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNRACK, constants.TNS_DATA_TYPE_KPDNRACK, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNRMP, constants.TNS_DATA_TYPE_KPDNRMP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_KPDNRDQ, constants.TNS_DATA_TYPE_KPDNRDQ, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SCN, constants.TNS_DATA_TYPE_SCN, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_SCN8, constants.TNS_DATA_TYPE_SCN8, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_CHUNKINFO, constants.TNS_DATA_TYPE_CHUNKINFO, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UD21, constants.TNS_DATA_TYPE_UD21, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_UDS, constants.TNS_DATA_TYPE_UDS, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_TNP, constants.TNS_DATA_TYPE_TNP, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OER, constants.TNS_DATA_TYPE_OER, constants.TNS_TYPE_REP_UNIVERSAL],
  [constants.TNS_DATA_TYPE_OAC, constants.TNS_DATA_TYPE_OAC, constants.TNS_TYPE_REP_UNIVERSAL]
];

module.exports = DataTypeMessage;
