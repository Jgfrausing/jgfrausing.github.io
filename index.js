
day = new Date().getDate()-10
window.addEventListener('load', function () {
   open()
})


function open(d) {
    var eles = document.getElementsByTagName('input');
    for (i = 0; i < eles.length; i++) {
        if (i < day) {
            eles.item(i).checked = true;
        } else if (i = day) {
            //today
        } else {
            eles.item(i).disabled = true;
        }
    }    
}

  