$(document).ready(init);
function init(){
  numOfPlayers();
  $('.button').click(addAPlayer);
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
  $('.availPlayerBox').append(ballerElement);//.setAttribute("id", overAllRating);
};
