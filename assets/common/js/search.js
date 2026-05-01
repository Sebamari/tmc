forSearchOnload(function() {
    // suggest
    var sBaseName = 'tmctv';
    if ('https:' == document.location.protocol) {
        var sProtocol   = 'https';
    	var sDomainName = 'rsv.dga.jp';
    } else {
        var sProtocol   = 'http';
    	var sDomainName = 'cache.dga.jp';
    }
    var da = document.createElement('script');
    da.type = 'text/javascript'; da.async = true;
    da.src = sProtocol +'://' + sDomainName +'/s/'+ sBaseName +'/new_i_search_assist.js';
    document.body.appendChild(da);

    var cs  = document.createElement('link'); cs.type = 'text/css'; cs.rel = 'stylesheet';
    cs.href = sProtocol +'://'+  sDomainName  +'/s/'+ sBaseName +'/new_ac.css';
    document.body.appendChild(cs);
    
}); 
function forSearchOnload(func){
    try { 
        window.addEventListener("load", func, false); 
    } catch (e) { 
        window.attachEvent("onload", func); 
    } 
}
