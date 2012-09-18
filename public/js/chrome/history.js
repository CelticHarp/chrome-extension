function History() {
	  this.microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
	  this.oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    this.pages = [];
    this.urlToCount = {};
}

History.prototype.getDateRange = function(start,end) {
	var options = {
		'text': '',
		'startTime': start
	}

	if(end) options.endTime = end;
	chrome.history.search(options,);
}

History.prototype.getPastWeek = function() {
	// To look for history items visited in the last week,
	// subtract a week of microseconds from the current time.
	var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
	var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;

	// Track the number of callbacks from chrome.history.getVisits()
	// that we expect to get.  When it reaches zero, we have all results.

	chrome.history.search({
		'text': '',              // Return every history item....
		'startTime': oneWeekAgo  // that was accessed less than one week ago.
	},function(historyItems) { archives.pages = historyItems; });
}

History.prototype.matchUrl = function(url, regex)
{
    var re = new RegExp(regex);
    return url.match(re);
}
