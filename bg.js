/**
 * Created by Donggu on 2016/9/22.
 */

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
    // 我们只接受来自我们自己的消息
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("内容脚本接收到：" + event.data.text);
        port.postMessage(event.data.text);
    }
}, false);


$('.zu-main-sidebar').remove();
$('body').css("font-family",'"苹果丽黑","等线"');
$('body').css("font-size","medium");
$('h2').css("font-size","large");
$('.zg-wrap').width("80%");
$('.zu-main-content-inner').css("margin","auto");
$('.zh-backtotop').css("left","75%");
$('span.izh-feeds-filter').css("font-size","small");