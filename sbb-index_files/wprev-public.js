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

(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	//document ready
	$(function(){
	 
		$( ".wprs_rd_more" ).click(function() {
			$(this ).hide();
			$(this ).next("span").show();
			
			//change height of wprev-slider-widget
			$(this ).closest( ".wprev-slider-widget" ).css( "height", "auto" );
			
			//change height of wprev-slider
			$(this ).closest( ".wprev-slider" ).css( "height", "auto" );
			
			
		});
		
		//check to see if we need to create slider;
		$( ".wprev-slider" ).each(function( index ) {
			createaslider(this,'shortcode');
		});
		$( ".wprev-slider-widget" ).each(function( index ) {
			createaslider(this,'widget');
		});
		function createaslider(thissliderdiv,type){
			
			var showarrows = true;
			if(type=='widget'){
				showarrows = false;
			}
			//unhide other rows.
			$( thissliderdiv ).find('li').show();
			$( thissliderdiv ).wprs_unslider(
					{
					autoplay:false,
					infinite:false,
					delay: '3000',
					speed: '750',
					animation: 'horizontal',
					arrows: showarrows,
					animateHeight: true,
					activeClass: 'wprs_unslider-active',
					}
				);
			
			setTimeout(function(){ 
				//height of active slide
				var firstheight = $(thissliderdiv).find('.wprs_unslider-active').height();
				$(thissliderdiv).css( 'height', firstheight );
			}, 500);
							
		};

		
	});

})( jQuery );


}
/*
     FILE ARCHIVED ON 18:36:28 Jul 23, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:42:21 Oct 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 125.616
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 83.734 (3)
  PetaboxLoader3.datanode: 186.705 (5)
  load_resource: 149.58
  PetaboxLoader3.resolve: 36.591
  loaddict: 21.886
*/