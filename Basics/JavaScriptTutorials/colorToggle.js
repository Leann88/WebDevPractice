var isBlue = false;
document.getElementById("toggle-button").addEventListener("click", function(){
    // if(isBlue) {
    //     document.body.style.background = "white";
    // } else {
    //      document.body.style.background = "blue";
    // }
    // isBlue = !isBlue;
    document.body.classList.toggle("isblue");
});