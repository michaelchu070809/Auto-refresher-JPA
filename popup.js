// adding listener to your button in popup window
function injection(){
    var targetprice = document.getElementById('price').value;
    //alert(targetprice);
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
        chrome.tabs.executeScript(null, {
            code: "var targetprice = "+targetprice}, function(){
                chrome.tabs.executeScript({file: "utilities.js", allFrames: false});
        })
    });
}
function encodeToPassToContentScript(obj){
    //Encodes into JSON and quotes \ characters so they will not break
    //  when re-interpreted as a string literal. Failing to do so could
    //  result in the injection of arbitrary code and/or JSON.parse() failing.
    return JSON.stringify(obj).replace(/\\/g,'\\\\').replace(/'/g,"\\'")
}


document.getElementById('press').addEventListener('click', injection);
