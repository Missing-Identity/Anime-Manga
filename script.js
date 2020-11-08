var deathNoteSection = document.querySelector('#death-note-review');
var demonSlayerSection = document.querySelector('#demon-slayer-review');
var dororoSection = document.querySelector('#dororo-review');
var charlotteSection = document.querySelector('#charlotte-review');
var erasedSection = document.querySelector('#erased-review');
var searchBar = document.querySelector('form');
var search = document.querySelector('#searchbutton');
var cancelBtn = document.querySelector('#cancelbutton');
var visibility = document.querySelectorAll('.section-visibility');

search.addEventListener('click', function(){
    console.log("Clicked");
    for( var v of visibility) {
        console.log("Clicked inside loop");
        v.style.display = "none";
    }
    const name = searchBar.elements.Search;
    if (name.value == "Death Note" || name.value == "death note" || name.value == "DeathNote" || name.value == "deathnote" || name.value == "Death-Note" || name.value == "death-note" || name.value == "Death note") {
        console.log("Searched Death Note!");
        deathNoteSection.style.display = "block";
    }
    else if (name.value == "Demon Slayer" || name.value == "demon slayer" || name.value == "DemonSlayer" || name.value == "demonslayer" || name.value == "Kimetsu no yaiba" || name.value == "Kimetsu no Yaiba" || name.value == "Demon slayer") {
        console.log("Searched Demon Slayer!");
        demonSlayerSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "ERASED") {
        console.log("Erased searched!");
        erasedSection.style.display = "block";
    }
});


