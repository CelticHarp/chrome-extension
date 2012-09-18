function Tabs() {}

Tabs.prototype.findTabs = function(window, regex){

    var results = [];

    for(var i = 0; i < window.tabs.length; i++){
        if(!this.matchUrl(window.tabs[i].url,regex)) continue;
        results.push(window.tabs[i]);
    }

    return results;
}
Tabs.prototype.matchUrl = function(url, regex)
{
    var re = new RegExp(regex);
    return url.match(re)
}

var tabs = new Tabs();


