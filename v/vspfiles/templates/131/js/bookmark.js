var bookmarkurl=window.location.href.substr(0,window.location.href.indexOf("/",8)+1)+"";if(document.title){var bookmarktitle=document.title}else{var bookmarktitle=""}var bookmarktext="Bookmark Us";if(navigator.appName=="Netscape"){bookmarktext="Bookmark Us (CTRL+D)"}else{if(navigator.appName=="Opera"){bookmarktext="Bookmark Us (CTRL+T)"}}function addbookmark(){if(window.sidebar){window.sidebar.addPanel(bookmarktitle,bookmarkurl,"")}else{if(window.external){window.external.AddFavorite(bookmarkurl,bookmarktitle)}}};