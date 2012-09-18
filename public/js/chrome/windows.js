function Windows(){
    this.allWindows = [];
    this.searches = [];
}

Windows.prototype.findTabs = function(regex,callback) {
    //console.log('searching for '+ regex);

    for(var i = 0; i < this.searches.length; i++)
        if(this.searches[i].regex == regex)
            this.searches.splice(i,1);

    this.searches.push({
        regex:regex,
        callback:callback,
        results:[]
    });

    chrome.windows.getAll({populate:true},this._endGetWindows);
}
Windows.prototype._endGetWindows = function(chromeWindows) {
    windows.allWindows = chromeWindows;

    for(i in windows.searches) {
        if(windows.searches[i].results.length == 0)
            windows.getTabs(i);
    }


}
Windows.prototype.getTabs = function(index){
    windows.searches[index].results = [];

    for(var i = 0; i < windows.allWindows.length; i++){
        var results = window.tabs.findTabs(windows.allWindows[i],windows.searches[index].regex);
        if(windows.searches[index].results.length > 0) windows.searches[index].results.concat(windows.searches[index].results,results);
        else windows.searches[index].results = results;
    }

    //console.log([windows.searches[index].regex,windows.searches[index].results]);

    if(windows.searches[index].results.length == 0) return;

    windows.searches[index].callback(windows.searches[index].regex,windows.searches[index].results);
}

var windows = new Windows();