
var i = 0;
function toggle() {
    var toggle = document.querySelector('.nav');
    var j = i%2;
    if(j==0){
        toggle.classList.add("navtoggle");
        i++;
    }else{
        toggle.classList.remove("navtoggle");
        i++;
    }
}

function loading(){
       
    var popup = document.getElementById("popup");
    popup.classList.toggle("popupactive");
}
