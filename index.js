
day = new Date().getDate()-20

window.addEventListener('load', function () {
   open()
})


function open(d) {
    var eles = document.getElementsByTagName('input');
    for (i = 0; i < day; i++) {
        eles.item(i).checked = true;
    }    
}

  