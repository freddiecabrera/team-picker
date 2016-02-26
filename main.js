

$(document).ready(init);
function init(){
  numOfPlayers();
  $('.button').click(addAPlayer);
  $('.boxes').on('click', 'p', highlight);
  $('#boxes').on('click', '.boxes', playerSelected);

}

var overAllRating;
var baller;
var ballers = [];


//give me a drop down menu from 60 - 100
var numOfPlayers = function() {
  var $select = $(".dropdownMenu");
  var showcounter = 100;
    for (i = 60; i <= showcounter; i++) {
        $select.append($('<option></option>').val(i).html(i));
    }
};

//create a player object with name and rating and push into an array
//append player to my available players
var addAPlayer = function(){
  baller = $('#nameInput').val();
  overAllRating = $('.dropdownMenu').val();
  document.getElementById('nameInput').value = '';
  var ballerElement = $('<p></p>').text(baller).addClass(overAllRating);
  ballers.push({name: baller, rating: overAllRating});
  $('.availPlayerBox').append(ballerElement);
};

// When clicked again it will increase the font size again
var highlight = function(event){
  event.stopPropagation();
  $(this).addClass('increaseFontSize')
}

// When a player is moved un-highlight
//if clicked again append increaseFontSize
//clicked again remove the increaseFontSize
var playerSelected = function(event){
  event.stopPropagation();
  var $increaseFontSize = $('.increaseFontSize');
  $('.increaseFontSize').detach();
  $(this).append($increaseFontSize);
  $increaseFontSize.removeClass('increaseFontSize');
};
