var currentlySelectedPerson = 0;
var personArray = [];

$(document).ready(function(){

    // Event Listeners
    $('#next-button').on('click', function() {
        currentlySelectedPerson++;
        showPerson();
    });
    // repeat for previous
    $('#prev-button').on('click', function() {
        currentlySelectedPerson--;
        showPerson();
    });

    getData();

});



function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            // move each person object from the array into our global array
            $.each(data.people, function(i, person) {
                personArray.push(person);
            });
            console.log(personArray);
            showPerson();
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

// Use ShowPerson to do all the DOM updating
// Each time it is called (each time a button is clicked)
// It has to empty() the containing div and then append the new stuff
// This should show personArray[currentlySelectedPerson]
function showPerson() {
    var person = personArray[currentlySelectedPerson];
    console.log(person);

    $('#person-info').empty();   //.children().last().remove();

    $('#person-info').append('<div class="specificPerson"></div>');
    var $el = $('#person-info').children().last();

    $el.append('<h2>' + person.name + '</h2>');
    $el.append('<p>' + person.favoriteMovie1 + '</p>');
    $el.append('<p>' + person.favoriteMovie2 + '</p>');
    $el.append('<p>' + person.favoriteSong + '</p>');
}
//$('#person-info').html('<h1>' + person.name + '</h1>' + '<p>' + person.favoriteMovie1 + '</p>' + '<p>' + person.favoriteMovie2 + '</p>' + '<p>' + person.favoriteSong + '</p>');


//$(document).ready(function(){
//
//    getData();
//
//});
//
//
//
//function getData(){
//    $.ajax({
//        type: "GET",
//        url:"/data",
//        success: function(data) {
//            console.log(data);
//            showPerson(data.people, currentlySelectedPerson);
//            var peopleArray = data.people;
//            for(var i = 0; i < peopleArray.length; i++) {
//                personArray.push(peopleArray[i]);
//            }
//            $.each(data.people, function(i, person) {
//
//                $('#person-info').append('<div id="person-info"></div>');
//              var $el = $('#person-info').children().last();
//            //    $el.append('<h2>' + person.name + '</h2>');
//            //    $el.append('<p>' + person.favoriteMovie1 + '</p>');
//            //    $el.append('<p>' + person.favoriteMovie2 + '</p>');
//            //    $el.append('<p>' + person.favoriteSong + '</p>');
//            });
//        },
//        error: function() {
//            console.log('ERROR: Unable to contact the server.');
//        }
//
//    });
//}
//
//function showPerson(peopleArray, specificPerson) {
//    var person = peopleArray[specificPerson];
//    $('#person-info').html('<h1>' + person.name + '</h1>' + '<p>' + person.favoriteMovie1 + '</p>' + '<p>' + person.favoriteMovie2 + '</p>' + '<p>' + person.favoriteSong + '</p>');
//}
//
//$('#next-button').on('click', showPerson, currentlySelectedPerson ++);
//
//$('#prev-button').on('click', showPerson, currentlySelectedPerson --);
//
//console.log(personArray);