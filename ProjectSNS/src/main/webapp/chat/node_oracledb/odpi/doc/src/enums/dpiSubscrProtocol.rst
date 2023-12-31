.. _dpiSubscrProtocol:

ODPI-C Enumeration dpiSubscrProtocol
------------------------------------

This enumeration identifies the protocol used for sending notifications to
subscriptions.

.. list-table-with-summary::
    :header-rows: 1
    :class: wy-table-responsive
    :widths: 15 35
    :summary: The first column displays the value of the dpiSubscrProtocol
     enumeration. The second column displays the description of the
     dpiSubscrProtocol enumeration value.

    * - Value
      - Description
    * - DPI_SUBSCR_PROTO_CALLBACK
      - Notifications are sent by calling the callback specified when the
        subscription was registered.
    * - DPI_SUBSCR_PROTO_HTTP
      - Notifications are sent to the URL specified when the subscription
        was registered.
    * - DPI_SUBSCR_PROTO_MAIL
      - Notifications are sent by sending an e-mail to the e-mail address
        specified when the subscription was registered.
    * - DPI_SUBSCR_PROTO_PLSQL
      - Notifications are sent by calling the PL/SQL procedure specified when
        the subscription was registered.
