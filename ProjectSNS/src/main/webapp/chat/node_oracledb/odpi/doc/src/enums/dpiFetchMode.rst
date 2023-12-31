.. _dpiFetchMode:

ODPI-C Enumeration dpiFetchMode
-------------------------------

This enumeration identifies the mode to use when scrolling the cursor to a new
location using the function :func:`dpiStmt_scroll()`.

.. list-table-with-summary::
    :header-rows: 1
    :class: wy-table-responsive
    :widths: 15 35
    :summary: The first column displays the value of the dpiFetchMode
     enumeration. The second column displays the description of the
     dpiFetchMode enumeration value.

    * - Value
      - Description
    * - DPI_MODE_FETCH_ABSOLUTE
      - Scroll the cursor to the row identified by the offset parameter using
        absolute positioning.
    * - DPI_MODE_FETCH_FIRST
      - Scroll the cursor to the first row in the result set. The offset is
        ignored when using this mode.
    * - DPI_MODE_FETCH_LAST
      - Scroll the cursor to the last row in the result set. The offset is
        ignored when using this mode.
    * - DPI_MODE_FETCH_NEXT
      - Scroll the cursor to the next row in the result set. The offset is
        ignored when using this mode.
    * - DPI_MODE_FETCH_PRIOR
      - Scroll the cursor to the previous row in the result set. The offset is
        ignored when using this mode.
    * - DPI_MODE_FETCH_RELATIVE
      - Scroll the cursor to the row identified by the offset parameter using
        relative positioning. A positive number will move forward in the result
        set while a negative number will move backwards in the result set.
