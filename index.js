
day = new Date().getDate()-1
day = 2
console.log(day)
if (new Date().getMonth() != 11) {
    day = -1
}
window.addEventListener('load', function () {
   open()
   enableModal()
})


function open() {
    var eles = document.getElementsByTagName('input');
    for (i = 0; i < eles.length; i++) {
        if (i < day) {
            eles.item(i).checked = true;
        } else if (i == day) {
            //today
        } else {
            eles.item(i).disabled = true;
        }
    }    
}



function clicked(id) {
    if (Number(id.replace('d', '')) > day +1) {
        return
    }
    val = dict[id]
    if (!val) {
        return
    }
    console.log("activating " + id)
    
    modal.style.display = "block";
    document.getElementById('modal-inner').outerHTML = dict[id]
    
}

var modal = null

function enableModal() {
// Get the modal
modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
  

var dict = {};
dict['d1'] = content([
    tag("h1", "Glædelig jul, min skat"),
    tag("p", "Jeg har lavet en lille julekalender til dig, som jeg håber du bliver glad for. I dag er det første, jeg vil give dig, et lille Haiku."), 
    span("Julekalender"),
    span("Til dig, Haiku er ikke nok"),
    span("I morgen, bedre"),
    tag("p", "Ja, det var alt det kunne blive til i dag, men det gælder om ikke at sætte standarden for højt til at starte med. I love you more."),
])

dict['d2'] = content([
    tag("h1", "Så blev det endelig d. 2. December"),
    span("2. december er nemlig den officielle G***** dag."),
    tag("p", "I love you. <3"),
    img("d2.jpeg")
])

dict['d3'] = content([
    tag("h1", "Shhh.. 🤫"),
    tag("p", "Find mig!"),
    span("Hvad kalder man en din ynglings italienske ost?"),
    span("Gøjgonzola"),
    img("d3.jpeg")
])

function content(elems) {
    res = '<div id="modal-inner">'
    for (i = 0; i < elems.length; i++) {
        res+= elems[i]
    }
    res += '</div>'
    return res
}

function tag(t, val) {
    return '<' + t + '>' + val + '<' + t + '>'
}

function span(val) {
    return tag("span", val + "<br/>")
}


function img(url) {
    return '<img src="' + url + '">'
}
