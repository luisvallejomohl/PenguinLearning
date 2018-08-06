WDL_GET traffic 
WDL_CREATEVARIABLE months~['January','February','March','April','May','June','July','August','September','October','November','December'] 
WDL_ADDROW traffic~{
year:date.getYear()+1900,
month:months[date.getMonth()],
day:date.getDay(),
} 
WDL_SAVE traffic
