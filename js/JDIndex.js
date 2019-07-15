window.onload=function() {
    //first左部分各个下拉框
    var ct1 = document.getElementById("ct1");
    var ct2 = document.getElementById("ct2");
    ct1.onmouseover = function() {
        ct2.style.display="block";
    }
    ct1.onmouseout = function() {
        ct2.style.display="none";
    }
    ct2.onmouseover = function() {
        this.style.display="block";
        ct1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    ct2.onmouseout = function() {
        this.style.display="none";
        ct1.style.cssText="";
    }
    var citys = ct2.getElementsByTagName("a");
    var city = document.getElementById("city")
    for(var i=0;i<citys.length;i++){
        citys[i].onclick = function(){
            values = this.firstChild.nodeValue;
            city.innerHTML = values;
            //好方法
            for(var i=0;i<citys.length;i++){
                citys[i].style.cssText = ""
            }
            this.style.cssText = "background:#B1191A;color:white;"
        }
    }
//first右部分各个下拉框
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    a1.onmouseover = function() {
        a2.style.display="block";
    }
    a1.onmouseout = function() {
        a2.style.display="none";
    }
    a2.onmouseover = function() {
        this.style.display="block";
        a1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    a2.onmouseout = function() {
        this.style.display="none";
        a1.style.cssText="";
    }
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    b1.onmouseover = function() {
        b2.style.display="block";
    }
    b1.onmouseout = function() {
        b2.style.display="none";
    }
    b2.onmouseover = function() {
        this.style.display="block";
        b1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    b2.onmouseout = function() {
        this.style.display="none";
        b1.style.cssText="";
    }
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    c1.onmouseover = function() {
        c2.style.display="block";
    }
    c1.onmouseout = function() {
        c2.style.display="none";
    }
    c2.onmouseover = function() {
        this.style.display="block";
        c1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    c2.onmouseout = function() {
        this.style.display="none";
        c1.style.cssText="";
    }
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    d1.onmouseover = function() {
        d2.style.display="block";
    }
    d1.onmouseout = function() {
        d2.style.display="none";
    }
    d2.onmouseover = function() {
        this.style.display="block";
        d1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    d2.onmouseout = function() {
        this.style.display="none";
        d1.style.cssText="";
    }
    var e1 = document.getElementById("e1");
    var e2 = document.getElementById("e2");
    e1.onmouseover = function() {
        e2.style.display="block";
    }
    e1.onmouseout = function() {
        e2.style.display="none";
    }
    e2.onmouseover = function() {
        this.style.display="block";
        e1.style.cssText="background: #ffffff;  border-left:1px solid lightgray;border-right: 1px solid lightgray"
    }
    e2.onmouseout = function() {
        this.style.display="none";
        e1.style.cssText="";
    }
//second部分的删除按钮
    var shanchu = document.getElementById("shanchu");
    shanchu.onclick = function() {
        var second = document.getElementById("second")
        second.style.display = "none"
    }
//购物车下拉框
    var f1 = document.getElementById("f1");
    var f2 = document.getElementById("f2");
    f1.onmouseover = function() {
        f2.style.display="block";
    }
    f1.onmouseout = function() {
        f2.style.display="none";
    }
    f2.onmouseover = function() {
        this.style.display="block";
        f1.style.cssText="-webkit-box-shadow: 0px -1px 2px #888888; -moz-box-shadow: 0px -1px 2px #888888;box-shadow: 0px -1px 2px #888888; background: #fff;"
    }
    f2.onmouseout = function() {
        this.style.display="none";
        f1.style.cssText="";
    }
//全部商品分类
    var nav = document.getElementById("nav")
    var navs = nav.getElementsByTagName("li")
    for (var i=0;i< navs.length;i++){
        navs[i].onmouseover = function() {
            num = this.getAttribute("date");
            document.getElementById("date" + num).style.display = "block"
            document.getElementById("date" + num).onmouseover = function() {
                this.style.display = "block";
            }
            document.getElementById("date" + num).onmouseout = function() {
                this.style.display = "none"
            }
        }
        navs[i].onmouseout = function() {
            num = this.getAttribute("date");
            document.getElementById("date" + num).style.display = "none"
        }
    }
    var partct = document.getElementById("partct")
    var partcts = partct.getElementsByTagName("div")
    for (var j=0;j<partcts.length;j++){
        partcts[j].onmouseenter = function() {
            nums = this.getAttribute("class")
            document.getElementById(nums + "1").style.cssText = "background: #f1f1f1;  color: #CB1623;"
        }
        partcts[j].onmouseleave = function() {
            nums = this.getAttribute("class")
            document.getElementById(nums + "1").style.cssText = ""
        }
    }

    var newway = document.getElementById("newway")
    var lis = newway.getElementsByTagName("li")
    var divs = newway.getElementsByTagName("div")
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function() {
            for (var i=0;i<lis.length;i++){
                lis[i].className = "";
            }
            this.className = "on";
            for (var j=0;j<divs.length;j++){
                divs[j].className = "hide"
            }
            divs[this.index].className = "show"
        }
    }

    var cebian = document.getElementById("cebian")
    var lis = cebian.getElementsByTagName("li")
    for (var i=0;i<lis.length;i++){
        lis[i].onmouseover = function() {
            for (var i=0;i<lis.length;i++){
                lis[i].lastChild.style.display = "none"
            }
            this.lastChild.style.display = "block"
        }
    }

    var cebian = document.getElementById("cebian")
    var gwcs = document.getElementById("gwcs")
    var zujis = document.getElementById("zujis")
    var gwc = document.getElementById("gwc")
    var zuji = document.getElementById("zuji")
    var g = 2;
    var z = 2;
    gwcs.onclick = function() {
        g = g + 1;
        if((g % 2) == 1){
            cebian.style.right ="300px";
            gwc.style.right = "0px";
        }else{
            cebian.style.right = "0px"
            gwc.style.right = "-300px"
        }
        }
    zujis.onclick = function() {
        z = z + 1;
        if((z % 2) == 1){
            cebian.style.right ="300px";
            gwc.style.right = "0px";
        }else{
            cebian.style.right = "0px"
            gwc.style.right = "-300px"
        }
    }
}




























