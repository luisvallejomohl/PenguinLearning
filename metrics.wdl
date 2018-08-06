WDL_GET traffic 
WDL_CREATEVARIABLE months~['January','February','March','April','May','June','July','August','September','October','November','December'] 
WDL_ADDROW traffic~{
year:Date().getYear()+1900,
month:months[Date().getMonth()],
day:Date().getDay(),
} 
WDL_SAVE traffic
