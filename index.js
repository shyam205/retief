
var i = 0;
function toggle() {
    var toggle = document.querySelector('.nav');
    var j = i%2;
    if(j==0){
        toggle.classList.add("navtoggle");
        console.log(i);
        i++;
    }else{
        toggle.classList.remove("navtoggle");
        console.log(i);
        i++;
    }
}

