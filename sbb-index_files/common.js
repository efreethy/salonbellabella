var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){
	$(document).ready( function(){
		var user_agent = navigator.userAgent;
		var is_opera_edge;
		var browser = user_agent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i) || [];
		var browser_name = '';
		var browser_class = '';

		if ( /trident/i.test( browser[0] ) ) {
			browser_name = 'ie';
		} else if ( browser[0] === 'Chrome' ) {
			is_opera_edge = user_agent.match(/\b(OPR|Edge)/);

			if ( is_opera_edge !== null ) {
				browser_name = is_opera_edge[0].replace('OPR', 'opera');
			}
		}

		// use navigator.appName as browser name if we were unable to get it from user_agent
		if ( '' === browser_name ) {
			if ('standalone' in window.navigator && !window.navigator.standalone) {
				browser_name = 'uiwebview';
			} else {
				browser_name = browser[0] && '' !== browser[0] ? browser[0] : navigator.appName;
			}
		}

		browser_name = browser_name.toLowerCase();

		// convert browser name to class. Some classes do not match the browser name
		switch( browser_name ) {
			case 'msie' :
				browser_class = 'ie';
				break;
			case 'firefox' :
				browser_class = 'gecko';
				break;
			default :
				browser_class = browser_name;
				break;
		}

		// add `iphone` class if browsing from iphone
		if ( user_agent.match(/iPhone/) ) {
			browser_class += ' iphone';
		}

		$( 'body' ).addClass( browser_class );
	});
})(jQuery);


}
/*
     FILE ARCHIVED ON 18:36:54 Jul 23, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:42:22 Oct 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 65.968
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.049
  esindex: 0.007
  LoadShardBlock: 40.053 (3)
  PetaboxLoader3.datanode: 162.465 (5)
  load_resource: 195.581
  PetaboxLoader3.resolve: 55.682
  loaddict: 113.479
*/