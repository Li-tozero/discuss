window.onload=function(){
    var list=document.getElementById("list");
    var lis=list.children;//获取子元素
    //使用事件代理
    function removeNode(node){
        node.parentNode.removeChild(node);
    }

    //赞分享
    function praiseBox(box,el){
        var praiseElement=box.getElementsByClassName("praise-total")[0];
        var oldTotal=parseInt(praiseElement.getAttribute("total"));
        var txt= el.innerHTML;
        var newTotal;
        if(txt=="赞"){
            newTotal=oldTotal+1;
            praiseElement.innerHTML=newTotal==1?"我觉得很赞":"我和"+oldTotal+"个人觉得很赞";
            el.innerHTML="取消赞";
        }
        else{
            newTotal=oldTotal-1;
            praiseElement.innerHTML=(newTotal==0)?"":newTotal+"个人觉得很赞";
            el.innerHTML="赞";
        }
        praiseElement.setAttribute("total",newTotal);
        praiseElement.style.display=(newTotal==0)?"none":"block";
    }
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(e){
            e=e||window.event;
            var el= e.srcElement;//获取事件的元素
            switch(el.className){
                case "close":
                    removeNode(el.parentNode);
                    break;
                //赞分享
                case "praise":
                    praiseBox(el.parentNode.parentNode.parentNode,el);
                    break;
            }
        }

        //输入框
        var textarea=lis[i].getElementsByTagName("textarea")[0];
        textarea.onfocus=function(){
            this.parentNode.className="text-box text-box-on";
            this.value=this.value=="评论..."?"":this.value;
        }
        textarea.onblur=function(){
            if(this.value==""){
                this.parentNode.className="text-box";
                this.value="评论...";
            }
        }
    }
}