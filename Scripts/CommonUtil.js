//新窗口
function fnNewWindow(url, width, height, title) {
    var obj = document.body;
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    var objWidth = obj.offsetWidth;
    var objHeight = obj.offsetHeight;
    var objTop = obj.scrollTop;
    var objX = Math.abs((clientWidth - width) / 2);
    var objY = Math.abs((clientHeight - height) / 2);
    if(obj.scrollTop<(clientHeight/2))
        objY = objY + obj.scrollTop/4;
    if (objY > clientHeight) 
        objY = Math.abs((clientHeight - height) / 2);
   
    //alert(objY);
    ymPrompt.win({ 
        message: url, 
        width: width, 
        height: height, 
        title: title, 
        handler: null, 
        iframe: true, 
        winPos: [objX, objY] 
    });
}
