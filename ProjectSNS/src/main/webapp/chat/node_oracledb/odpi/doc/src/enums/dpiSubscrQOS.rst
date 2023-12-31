.. _dpiSubscrQOS:

ODPI-C Enumeration dpiSubscrQOS
-------------------------------

This enumeration identifies the quality of service flags for sending
notifications to subscriptions.

.. list-table-with-summary::
    :header-rows: 1
    :class: wy-table-responsive
    :widths: 15 35
    :summary: The first column displays the value of the dpiSubscrQOS
     enumeration. The second column displays the description of the
     dpiSubscrQOS enumeration value.

    * - Value
      - Description
    * - DPI_SUBSCR_QOS_BEST_EFFORT
      - Perform query notification in best effort mode which may result in
        notifications being sent when the query has not in fact changed. This
        is needed for complex queries that cannot be registered in guaranteed
        mode.
    * - DPI_SUBSCR_QOS_DEREG_NFY
      - When the notification has been received, the subscription is removed.
    * - DPI_SUBSCR_QOS_QUERY
      - Perform query notification instead of database change notification.
        Notification is done in guaranteed mode which guarantees that the query
        has in fact changed.
    * - DPI_SUBSCR_QOS_RELIABLE
      - Notifications are sent reliably. If the database fails, the notifications
        are not lost. This is not supported for nonpersistent queues or buffered
        messaging.
    * - DPI_SUBSCR_QOS_ROWIDS
      - Information on the rows affected by the database or query change is
        sent along with the notification.
