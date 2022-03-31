
function getDate(text, curr) {
    const times = {
        minute: dateFns.subMinutes,
        hour: dateFns.subHours,
        day: dateFns.subDays
    };
    for (let type of Object.keys(times)) {
        if (text.includes(type)) {
            const value = parseInt(text.split(' ' + type)[0]);
            return times[type](curr, value);
        }
    }
    return new Date(text);
}

var delimiter = '<b>...</b>'
var myWebResultsRenderedCallback = function() {
    window.parent.observeHeight({id:iframeId, height:document.body.scrollHeight});
    const curr = new Date();
    let recentText = '';
    let recentValue = 0;
    for (let el of document.getElementsByClassName('gs-snippet')) {
        if (el.textContent === 'No Results') {
            recentText = el.textContent;
            break;
        } else if (el.innerHTML.includes(delimiter)) {
            const text = el.innerHTML.split(delimiter)[0].trim();
            const value = getDate(text, curr);
            if (value > recentValue) {
                recentText = text;
                recentValue = value;
            }
        }
    }
    window.parent.setRecent(iframeId, recentText);
};
window.__gcse || (window.__gcse = {});
window.__gcse.searchCallbacks = {
    web: {
        rendered: 'myWebResultsRenderedCallback',
    },
};
function executeQuery(search) {
    var element = google.search.cse.element.getElement('searchresults-only0');
    if (search == '') {
        element.clearAllResults();
    } else {
        element.execute(search);
    }
}
