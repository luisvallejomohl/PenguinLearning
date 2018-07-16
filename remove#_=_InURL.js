/*If you arrived via a Facebook callback, it might 
have appended #_=_ to the URL. This confuses our 
Backbone routers, so get rid of it
http://www.stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url
*/
if (location.hash == '#_=_'){
    	history.replaceState 
        ? history.replaceState(null, null, location.href.split('#')[0])
        : window.location.hash = '';
}