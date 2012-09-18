function History() {
		this.second = 1000;
		this.minute = this.second * 60;
		this.hour = this.minute * 60;
		this.day = this.hour * 24;
		this.week = this.day * 7;
    this.pages = [];
    this.urlToCount = {};
}

History.prototype.getDateRange = function(start,end) {
	var options = {
		'text': '',
		'startTime': start
	}

	if(end) options.endTime = end;
	chrome.history.search(options,function(historyItems) { this.pages = historyItems; });
}
History.prototype.now = function() {
	return (new Date).getTime();
}
History.prototype.getPastWeek = function() {
	var current = this.now();
	this.getDateRange(current - this.week);
}
History.prototype.getYesterday = function() {
	var current = this.now();
	this.getDateRange(current - this.day * 2,current - this.day);
}
History.prototype.getToday = function() {
	var current = this.now();
	this.getDateRange(current - this.day);
}
History.prototype.matchUrl = function(url, regex)
{
    var re = new RegExp(regex);
    return url.match(re);
}
