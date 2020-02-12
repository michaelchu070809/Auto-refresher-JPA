function goToActivityTab() {
    //alert(targetprice);
    
    var d = document.getElementsByClassName("a-row a-spacing-mini olpOffer")[0].getElementsByClassName("a-size-large a-color-price olpOfferPrice a-text-bold")[0].innerText;
    var price = d.slice(2);
    var price = price.replace(',','');
    var targetprice2 = Number(targetprice);
    price = parseInt(price);
    console.log("current price:  "+ price);
    console.log("count:  "+count);
    console.log("target price: "+targetprice2);
    if(price<=targetprice2){
        //alert(price);
        clearInterval(intrvalid);
        var button = document.getElementsByClassName("a-row a-spacing-mini olpOffer")[0].getElementsByClassName("a-button-input")
        button[0].click();
        var opt1= {
            type: "basic",
            title: "One object has been added into cast!",
            message: "1 Mask has been added, please check your cast!",
            iconUrl: "icon.png",
            id: getJSessionId()
        };
        chrome.runtime.sendMessage({type: "shownotification", opt: opt1}, function(){});
    }
    else{
        //alert("refresh");
        count++;
        if(count >= 21600){
            clearInterval(intrvalid);
            return;
            
        }
        $("#olpOfferListColumn").append(count);
        $("#olpOfferListColumn").load(window.location.href+" #olpOfferListColumn"); 
    }
}
//alert("Target price will be: "+targetprice);
var opt = {
    type: "basic",
    title: "Auto-refresher JPA started!",
    message: "It will keep refreshing in next 30mins\nTarget Price: "+targetprice+" yenzzzz",
    iconUrl: "icon.png",
    id:getJSessionId()

};
chrome.runtime.sendMessage({type: "shownotification_start", opt: opt}, function(){});
var count = 0;
var intrvalid = setInterval(goToActivityTab,1000);

function getJSessionId(){
    var jsId = document.cookie.match(/JSESSIONID=[^;]+/);
    if(jsId != null) {
        if (jsId instanceof Array)
            jsId = jsId[0].substring(11);
        else
            jsId = jsId.substring(11);
    }
    return jsId;
}

