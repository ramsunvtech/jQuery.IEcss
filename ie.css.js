/**
 * This jQuery Plugin is helps to Update your Specific Styles for IE7, IE8, IE9 Browser and future IE browsers.
 * Author: Venkatraman Ramamoorthy
 * Email: ramsunvtech@gmail.com
 */

(function($) {

    $.fn.IEcss = function(givenPattern, css, propVal) {
    	var ieVer, uA, givenVersion, aFlag;
    	uA = navigator.userAgent;
    	var msie = uA.match(/MSIE (\d+)/);
    	ieVer = (msie != null && typeof msie == 'object') ? msie[1] : 0;
    	gPat = givenPattern.split(':');
    	gCond = gPat[0];
    	gVer = gPat[1];

        aFlag = (ieVer == 0) ? 0 : (gCond == 'lt' && ieVer < gVer) ? 1 : (gCond == 'lte' && ieVer <= gVer) ? 1 : (gCond == 'gt' && ieVer > gVer) ? 1 : (gCond == 'gte' && ieVer >= gVer) ? 1 : (gCond == 'eq' && ieVer == gVer) ? 1 : 0;

    	if(aFlag) {
            var el = $(this);
            if(typeof css == 'object') el.css(css);
            else if(typeof css == 'string' && propVal == undefined) return el.css(css);
            else if(typeof css == 'string' && typeof propVal == 'string') return el.css(css, propVal);
        }
        return '';
    }
}(jQuery));
