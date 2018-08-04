 # Our_metrics_tracking_system_ONLY_adds_a_timestamp_to_the_traffic_database,_which_can_then_be_used_to_find_the_traffic.
WDL_GET traffic
WDL_CREATEVARIABLE date~Date() 
WDL_CREATEVARIABLE months~['January','February','March','April','May','June','July','August','September','October','November','December'] 
WDL_ADDROW traffic~{year:date.getYear(),month:months[date.getMonth()],day:date.getDay()} 
