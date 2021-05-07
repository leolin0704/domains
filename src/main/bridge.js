var HSBC_BASE = 'http://127.0.0.1:3000'

var iframe = document.createElement('iframe'); 
iframe.src= HSBC_BASE + "/public/bridge.html";  
document.body.appendChild(iframe);

window.postHSBC = function (msg) {
    iframe.contentWindow.postMessage(msg, HSBC_BASE)
} 