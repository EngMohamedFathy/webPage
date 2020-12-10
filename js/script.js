window.onload=function(){
    "use strict";
    var sideTool=document.querySelectorAll(".side_tool")[0];
    var sideRect=document.querySelectorAll(".rect")[0];
    var sideCicle=document.querySelectorAll(".cicle")[0];
    var overall=document.querySelectorAll(".overall")[0];
    sideTool.onclick=function(){
        this.classList.add("reset-rotate")
        sideRect.classList.add("reset-rotate-rect");
        sideCicle.innerHTML="X";
        overall.style.display="block";
    }
    
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==0 && this.status==200){
            sideCicle.innerHTML=this.resoponseText;
        }
    }
    xmlhttp.open("GET","ajax.php",true);
    xmlhttp.send();

}