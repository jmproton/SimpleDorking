myWebResultsRenderedCallback = function() {
    window.parent.observeHeight({id:window['iframeId'], height:document.body.scrollHeight});
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
