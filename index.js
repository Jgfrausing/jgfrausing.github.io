
day = new Date().getDate()-1
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

dict['d4'] = content([
    tag("h1", "Så blev det 2. advent"),
    tag("p", "Jeg sagde jo, at det ikke skulle være så nemt. Så I dag får du en gåde i stedet for et billede."),
    span("Følgende er både lokationen og en beskrivelse af mig:"),
    span("\"Når alt bliver sort, så kom til mig.\""),
    span("Hvad og hvor er jeg?"),
    tag("p", "♥️ P.S. Du er min drømme pige. ♥️")
])

dict['d5'] = content([
    tag("h1", "Monday means movie"),
    span("I dag, får du en \"I can choose the movie\" billet"),
    span("Det betyder, at du må vælge en film i aften, som jeg ikke kan sige nej til"),
    tag("p", "Get those popcorns 🍿🍿")
])

dict['d6'] = content([
    tag("h1", "At glæde sig, er den halve gave"),
    span("Du kan se frem til en weekend uden bleskift"),
    span("Farmand klare alle bleskift fra han kommer hjem fra arbejde fredag til han tager afsted mandag."),
    tag("p", "Julen er jo glædernes tid")
])
dict['d7'] = content([
   tag("h1", "Jonatans onsdag."),
    span("I dag, skal din kæreste forkæles"),
    span("Måske du kunne starte med at lavet ham en kop kaffe?"),
    tag("p", "Jeg elsker dig, Gøj")
])
dict['d8'] = content([
    tag("h1", "Haiku torsdag."),
     span("Far, mor og Ozzy"),
     span("Idyl, lykke og hygge"),
     span("Alt det jeg elsker")
 ])

 dict['d9'] = content([
    tag("h1", "Ventetiden i julen er altid lang"),
     span("Hvis du kunne spole tiden frem til jul, ville du så gøre det?"),
     span("Jeg synes det er svært at vente."),
     span("Ak ak ak, i dag skal du have ***"),
     span("Jeg gemmer mig i kulden")
 ])
 dict['d10'] = content([
    tag("h1", "Godmorgen future-wife"),
     span("Æg æg æg, mit navn det står med emhætter"),
     span("Pas på du ikke gætter (hvor jeg er)"),
     tag("p", "p.s. du har en god røv")
 ])

 dict['d11'] = content([
    tag("h1", "Godmorgen Snack"),
     span("I dag skal du prøve noget, som du ikke har prøvet før"),
     span("BUNGYJUMP!!"),
     tag("p", "Ej, det er gas. Se om du kan finde mig. Jeg er gået i baren.")
 ])

 dict['d13'] = content([
     span("Her ved vor ønskefest"),
     span("sangen skal klinge"),
     span("gaver til hver en gæst"),
     span("gemt her i skuffen"),
     span("Skænk os af lykkens væld"),
     span("lige til livets kvæld"),
     span("Santa Lucia, Santa Lucia"),
     tag("p", "tekst og melodi: Jonatan"),
     img("d13.jpeg")
 ])
 dict['d14'] = content([
    span("I aften skal vi have..."),
    '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/toZW65rksYY?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"></iframe>'
 ])


 dict['d15'] = content([
span("A chocolate egg so sweet and fine"),
span("Is hidden deep inside this guitar of mine"),
span("Its creamy center, rich and bold"),
span("A treasure to behold, I am told"),
"<br/>",
span("With every strum and every pluck"),
span("The egg is shaken, but it stays tucked"),
span("In its cozy nook, safe and sound"),
span("Until the right moment can be found"),
"<br/>",
span("To break its shell and taste its prize"),
span("A moment of pure, chocolatey bliss"),
span("A symphony of flavor and delight"),
span("A treat to savor, morning, noon, and night"),
"<br/>",
span("So if you see a guitar that's worn and old"),
span("Don't be fooled, it may hold a treasure to behold"),
span("A chocolate egg, a delicious surprise"),
span("A tasty treat that will open your eyes"),
"<br/>",
span("To the joys that music and chocolate can bring"),
span("A harmony of flavor and melody, a delicious symphony."),
]) 

dict['d19'] = content([
    tag('h1', 'Godmorgen, skat'),
    span('Jeg har endelig fundet nissen. Han sad sad og varmede vandrøret til køkkenvasken, så vi kunne få varmt vand'),
    span('Jeg har bedt ham om at priotere din julekalender frem for det varme vand - selvom det var sødt af ham'),
    tag('p', 'So without further ado:'),
    span('Hvad er det man gør to gange om dagen?'),
])
 

dict['d21'] = content([
    tag('h1', 'Glædelig Vintersolhverv'),
    span('Kan du forstille dig, at Joakim Mæhle brænder en oplagt chance?'),
    span('Så kan man godt komme til at sige DUM MÆHLE'),
    span('Utroligt, at en karmel er opkaldet efter det')
])

dict['d24'] = content([
    tag('h1', 'Så blev det endelig jul'),
    span('Tænk, at vi for et år siden var nyforelsket på Gran Canarie.'),
    span('Der er sket så meget, at det føles som om 100 år er gået siden.'),
    span('Størst af dem alle er Ozzy, vores lille gulkulmp.'),
    span('Jeg kan slet ikke beskrive, hvor meget I to betyder for mig.'),
    span('Jeg glæder mig til 100 juleaftner med jer.'),
    tag('p', 'Jeg elsker jer så højt.'),
    tag('p', 'P.S. Nissen har samlet resterne og gemt dem i en kikkert af pap.')
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
