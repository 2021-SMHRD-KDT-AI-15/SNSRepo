.. _dpiStartupMode:

ODPI-C Enumeration dpiStartupMode
---------------------------------

This enumeration identifies the mode to use when starting up a database using
:func:`dpiConn_startupDatabase()`.

.. list-table-with-summary::
    :header-rows: 1
    :class: wy-table-responsive
    :widths: 15 35
    :summary: The first column displays the value of the dpiStartupMode
     enumeration. The second column displays the description of the
     dpiStartupMode enumeration value.

    * - Value
      - Description
    * - DPI_MODE_STARTUP_DEFAULT
      - Default mode for startup which permits database access to all users.
    * - DPI_MODE_STARTUP_FORCE
      - Shuts down a running instance (using ABORT) before starting a new one.
        This mode should only be used in unusual circumstances.
    * - DPI_MODE_STARTUP_RESTRICT
      - Only allows database access to users with both the CREATE SESSION and
        RESTRICTED SESSION privileges (normally the DBA).
