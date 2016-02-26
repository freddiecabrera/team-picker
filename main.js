$(document).ready(init);
function init(){
  numOfPlayers();
  $('.button').click(addAPlayer);
}
var overAllRating;
var baller;
var ballers = [];
var numOfPlayers = function() {
  var $select = $(".dropdownMenu");
  var showcounter = 100;
    for (i = 60; i <= showcounter; i++) {
        $select.append($('<option></option>').val(i).html(i));
    }
}

var addAPlayer = function(){
  baller = $('#nameInput').val();
  overAllRating = $('.dropdownMenu').val();
  document.getElementById('nameInput').value = '';
  ballers.push({name: baller, rating: overAllRating});


  console.log(baller);
  console.log(overAllRating);
}
