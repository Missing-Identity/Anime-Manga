var deathNoteSection = document.querySelector('#death-note-review');
var demonSlayerSection = document.querySelector('#demon-slayer-review');
var dororoSection = document.querySelector('#dororo-review');
var charlotteSection = document.querySelector('#charlotte-review');
var erasedSection = document.querySelector('#erased-review');
var initialDSection = document.querySelector("#initial-d-review");
var orvSection = document.querySelector('#orv-review');
var tasogareSection = document.querySelector('#tasogare-review');
var searchBar = document.querySelector('form');
var search = document.querySelector('#searchbutton');
var viewAll = document.querySelector('#viewbutton');
var visibility = document.querySelectorAll('.section-visibility');
var imgVisibility = document.querySelectorAll('.img-visibility');
var featuredReview = document.querySelector('#featured-review');
var backToReviewCards = document.querySelectorAll('.back-to-rev-section');

var deathNoteButton = document.querySelector('#death-note-button');
var erasedButton = document.querySelector('#erased-button');
var demonSlayerButton = document.querySelector('#demon-slayer-button');

var orvButton = document.querySelector('#orv-button');
var tasogareButton = document.querySelector('#tasogare-button');

var deathNoteImages = document.querySelector('#img-death-note');
var demonSlayerImages = document.querySelector('#img-demon-slayer');
var erasedImages = document.querySelector('#img-erased');

var orvImages = document.querySelector('#img-orv');
var tasogareImages = document.querySelector('#img-tasogare');

search.addEventListener('click', function(){
    featuredReview.style.display = "none";
    for(var v of visibility) {
        v.style.display = "none";
    }
    const name = searchBar.elements.Search;
    if (name.value == "Death Note" || name.value == "death note" || name.value == "DeathNote" || name.value == "deathnote" || name.value == "Death-Note" || name.value == "death-note" || name.value == "Death note") {
        console.log("Searched Death Note!");
        deathNoteSection.style.display = "block";
        featuredReview.style.display = "block";
    }
    else if (name.value == "Demon Slayer" || name.value == "demon slayer" || name.value == "DemonSlayer" || name.value == "demonslayer" || name.value == "Kimetsu no yaiba" || name.value == "Kimetsu no Yaiba" || name.value == "Demon slayer") {
        console.log("Searched Demon Slayer!");
        demonSlayerSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "ERASED") {
        console.log("Erased searched!");
        erasedSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "CHARLOTTE") {
        console.log("Charlotte searched!");
        charlotteSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "DORORO") {
        console.log("Dororo searched!");
        dororoSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "INITIAL D" || name.value.toUpperCase().trim() == "INITIAL-D" || name.value.toUpperCase().trim() == "INITIALD") {
        console.log("Initial-D searched!");
        initialDSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "ORV" || name.value.toUpperCase().trim() == "O.R.V" || name.value.toUpperCase().trim() == "O.R.V." || name.value.toUpperCase().trim() == "OMNISCIENT READER'S VIEWPOINT" || name.value.toUpperCase().trim() == "OMNISCIENT READERS VIEWPOINT" || name.value.toUpperCase().trim() == "OMNISCIENTREADER'SVIEWPOINT" || name.value.toUpperCase().trim() == "OMNISCIENTREADERSVIEWPOINT" || name.value.toUpperCase().trim() == "O R V"){
        console.log("O.R.V searched");
        orvSection.style.display = "block";
    }
    else if (name.value.toUpperCase().trim() == "TASOGARE OTOME X AMNESIA" || name.value.toUpperCase().trim() == "TASOGAREOTOMEXAMNESIA" || name.value.toUpperCase().trim() == "TASOGARE OTOME AMNESIA" || name.value.toUpperCase().trim() == "TASOGAREOTOMEAMNESIA" || name.value.toUpperCase().trim() == "DUSK MAIDEN OF AMNESIA" || name.value.toUpperCase().trim() == "DUSKMAIDENOFAMNESIA" || name.value.toUpperCase().trim() == "TASOGARE" || name.value.toUpperCase().trim() == "DUSK MAIDEN") {
        console.log("Tasogare searched");
        tasogareSection.style.display = "block";
    }
    else {
        console.log("Invalid name searched!");
    }
});

viewAll.addEventListener('click', function(e){
    e.preventDefault();
    featuredReview.style.display = "block";
    for(var v of visibility){
        v.style.display = "block";
    }
    for (var i of imgVisibility){
        i.style.display = "none";
    }
});

for (var r of backToReviewCards){
    r.addEventListener('click', function(e){
        e.preventDefault();
        featuredReview.style.display = "block";
        for(var v of visibility){
            v.style.display = "block";
        }
        for (var i of imgVisibility){
            i.style.display = "none";
        }
    });
}

deathNoteButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    deathNoteImages.style.display = "block";
});

demonSlayerButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    demonSlayerImages.style.display = "block";
});

erasedSection.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    erasedImages.style.display = "block";
});

orvButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    orvImages.style.display = "block";
});

tasogareButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    tasogareImages.style.display = "block";
});




