function Redirect() {
    this.todo = [];
    this.list = [];
}

//make timers for all tabs based off when a url changes
Redirect.prototype.start = function() {
    var elmt_id = window.setTimeout(function() {
        for(var i = 0; i < window.redirect.list.length; i++)
            windows.findTabs(window.redirect.list[i].from,window.redirect.changeTabUrl);
        redirect.start()
    }, 1500);
}

Redirect.prototype.changeTabUrl = function(regex, results) {

    //console.log(regex,results,window.redirect.list);

    for(var i = 0; i < results.length; i++){
        for(var j = 0; j < window.redirect.list.length; j++) {
            //console.log([redirect.list[j].from,regex]);
            if(redirect.list[j].from != regex) continue;

            redirect.todo.push({tabId:results[i].id,toUrl:redirect.list[j].to,fromRegex:redirect.list[j].from});


            var elmt_id = window.setTimeout(function() {
                for(var x = 0; x < redirect.todo.length; x++)
                {
                    console.log(['redirecting ', redirect.todo[x].fromRegex,' to ',redirect.todo[x].toUrl]);
                    chrome.tabs.update(redirect.todo[x].tabId,{url:redirect.todo[x].toUrl});

                }

                redirect.todo = [];
            }, window.redirect.list[j].delay * 1000);
        }
    }
}
