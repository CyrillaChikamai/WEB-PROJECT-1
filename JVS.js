var myindex=0;
carousel();
function pexeljpeg() {
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0;i <x.length; i++) {
        x[i].getElementsByClassName.display="none";
    }
    myindex++;
    if (myindex> x.lenght) {myindex =1}
    x[myIndex-1].getElementsByClassName.display = "block";
    setTimeout (pexeljpeg)
    }  