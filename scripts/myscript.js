window.onload=function(){
    var list=document.getElementById("list");
    var lis=list.children;//获取子元素
    //使用时间代理
    //function removeNode(node){
    //    node.parentNode.removeChild(node);
    //}
    //for(var i=0;i<lis.length;i++){
    //    lis[i].onclick=function(e){
    //        e=e||window.event;
    //        var el= e.srcElement;
    //        switch(el.className){
    //            case "close":
    //                removeNode(el.parentNode);
    //                break;
    //        }
    //    }
    //}
}