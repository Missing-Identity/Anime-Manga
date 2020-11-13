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
var dororoButton = document.querySelector('#dororo-button');
var charlotteButton = document.querySelector('#charlotte-button');
var initialDButton = document.querySelector('#initial-d-button');
var orvButton = document.querySelector('#orv-button');
var tasogareButton = document.querySelector('#tasogare-button');

var universalImages = document.querySelector('#img-universal');

var firstImage = document.querySelector('#img-1');
var secondImage = document.querySelector('#img-2');
var thirdImage = document.querySelector('#img-3');
var fourthImage = document.querySelector('#img-4');
var fifthImage = document.querySelector('#img-5');
var sixthImage = document.querySelector('#img-6');
var seventhImage = document.querySelector('#img-7');

var goBack = document.querySelector('#go-back-button');

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
    else if (name.value.toUpperCase().trim() == "ERASED" || name.value.toUpperCase().trim() == "BOKU DAKE GA INAI MACHI" || name.value.toUpperCase().trim() == "ER" || name.value.toUpperCase().trim() == "ERA") {
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
    else if (name.value.toUpperCase().trim() == "INITIAL D" || name.value.toUpperCase().trim() == "INITIAL-D" || name.value.toUpperCase().trim() == "INITIALD" || name.value.toUpperCase().trim() ==  "INITIAL") {
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
    else if (name.value.toUpperCase().trim() == "E"){
        erasedSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() == "D") {
        demonSlayerSection.style.display = "block";
        deathNoteSection.style.display = "block";
        dororoSection.style.display = "block";
        initialDSection.style.display = "block";
        tasogareSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() == "DE"){
        demonSlayerSection.style.display = "block";
        deathNoteSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "DO"){
        dororoSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "C"){
        charlotteSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "CHAR") {
        charlotteSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() == "T"){
        tasogareSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "TASO"){
        tasogareSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "DU" || name.value.toUpperCase().trim() ==  "DUSK"){
        tasogareSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "O"){
        orvSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "OR") {
        orvSection.style.display = "block";
    }
    else if(name.value.toUpperCase().trim() ==  "I"){
        initialDSection.style.display = "block";
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
    demonSlayerSection.scrollIntoView();
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
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "none";
    universalImages.style.backgroundColor = "#000000";
    firstImage.src = "https://i.ibb.co/MNGC0FG/Front-Page.png";
    secondImage.src = "https://i.ibb.co/y4MZWp6/Page1.png";
    thirdImage.src = "https://i.ibb.co/YZ6Hbrk/Page2.png";
    fourthImage.src = "https://i.ibb.co/khgrs0j/Page3.png";
    fifthImage.src = "https://i.ibb.co/ZfSsLQv/Page4.png";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#eeeeee";
    goBack.scrollIntoView();
});

demonSlayerButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right bottom,  #f7f7f7, #4d88ff)";
    firstImage.src = "https://i.ibb.co/HDYwRzL/Demon-Slayer-Title.png";
    secondImage.src = "https://i.ibb.co/DVNnMf9/Demon-Slayer-Page-1.png";
    thirdImage.src = "https://i.ibb.co/Ln6By6H/Demon-Slayer-Page-2.png";
    fourthImage.src = "https://i.ibb.co/5Tm7mDW/Demon-Slayer-Page-3.png";
    fifthImage.src = "https://i.ibb.co/RNtdDsV/Demon-Slayer-Page-4.png";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#000000";
    goBack.scrollIntoView();
});

erasedButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right top, #D38312 0%, #b21f1f 20%, #000000 65%)";
    firstImage.src = "https://i.ibb.co/56X39r9/Erased-Title.png";
    secondImage.src = "https://i.ibb.co/zZk2MJf/Erased-Page-1.png";
    thirdImage.src = "https://i.ibb.co/02CRwCz/Erased-Page-2.png";
    fourthImage.src = "https://i.ibb.co/NTtgkq3/Erased-Page-3.png";
    fifthImage.src = "";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#eeeeee";
    goBack.scrollIntoView();
});

dororoButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "radial-gradient(rgb(234, 209, 115) 0%, rgb(234, 209, 115) 80%, #000000 99%)";
    firstImage.src = "https://i.ibb.co/z4y4sWv/Dororo-Front.png";
    secondImage.src = "https://i.ibb.co/JFjFw0r/A4-1.png";
    thirdImage.src = "https://i.ibb.co/hfvkd2n/A4-2.png";
    fourthImage.src = "https://i.ibb.co/nL2V5rT/A4-3.png";
    fifthImage.src = "https://i.ibb.co/CssDMHy/A4-4.png";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#000000";
    goBack.scrollIntoView();
});

charlotteButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right bottom,  #0f0c29, #302b63)";
    firstImage.src = "https://i.ibb.co/6PQ29Y4/Charlotte-Title.png";
    secondImage.src = "https://i.ibb.co/x6Q90md/Charlotte-1.png";
    thirdImage.src = "https://i.ibb.co/4gG9vfz/Charlotte-2.png";
    fourthImage.src = "https://i.ibb.co/YpL89pP/Charlotte-3.png";
    fifthImage.src = "https://i.ibb.co/wLfYXsT/Charlotte-Conclusion.png";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#eeeeee";
    goBack.scrollIntoView();
});

orvButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right bottom,  #2C3E50, #FD746C)";
    firstImage.src = "https://i.ibb.co/zsyKDHW/A4-3.png";
    secondImage.src = "https://i.ibb.co/ZLqS7Pb/A4-4.png";
    thirdImage.src = "https://i.ibb.co/zRRhQVX/A4-5.png";
    fourthImage.src = "https://i.ibb.co/ygV6YLN/A4-6.png";
    fifthImage.src = "https://i.ibb.co/ZJBjy69/A4-7.png";
    sixthImage.src = "https://i.ibb.co/VmRq2Y7/A4-8.png";
    seventhImage.src = "https://i.ibb.co/PgSNLpq/A4-9.png";

    goBack.style.color = "#eeeeee";
    goBack.scrollIntoView();
});

tasogareButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right bottom,  #3a6186, #89253e)";
    firstImage.src = "https://i.ibb.co/QDsjsVf/Front-Page.png";
    secondImage.src = "https://i.ibb.co/7jdPSb3/Page-1.png";
    thirdImage.src = "https://i.ibb.co/rM35YTJ/Page-2.png";
    fourthImage.src = "https://i.ibb.co/wscChCx/Page-3.png";
    fifthImage.src = "";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#eeeeee";
    goBack.scrollIntoView();
});

initialDButton.addEventListener('click', function(){
    for(var v of visibility) {
        v.style.display = "none";
    }
    universalImages.style.display = "block";
    universalImages.style.backgroundImage = "linear-gradient(to right bottom, #eeeeee, #999999)";
    firstImage.src = "https://i.ibb.co/qD7DL3d/review-cover.png";
    secondImage.src = "https://i.ibb.co/Jmj6vHh/page-1.png";
    thirdImage.src = "https://i.ibb.co/djck4JB/page-2.png";
    fourthImage.src = "https://i.ibb.co/wWfM4dK/page-3.png";
    fifthImage.src = "";
    sixthImage.src = "";
    seventhImage.src = "";

    goBack.style.color = "#000000";
    goBack.scrollIntoView();
});


