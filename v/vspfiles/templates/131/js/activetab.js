function scriptInit(){if(!document.getElementById){return}}function addEvent(e,d,b,a){if(e.addEventListener){e.addEventListener(d,b,a);return true}else{if(e.attachEvent){var c=e.attachEvent("on"+d,b);return c}else{e["on"+d]=b}}}function checkActive(){var b=document.getElementsByTagName("a");if(window.location.href.substr(location.href.length-1,1)=="/"){var d=window.location.href+"default.asp"}else{var d=window.location.href}for(var c=0;c<b.length;c++){if(b[c].href==d){b[c].setAttribute("class","active");b[c].setAttribute("className","active")}}}addEvent(window,"load",checkActive,false);