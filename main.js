$(document).ready(init);
function init(){
  numOfPlayers();
  $('.button').click(addAPlayer);
}
var overAllRating;
var baller;
var numOfPlayers = function() {
  var $select = $(".dropdownMenu");
  var showcounter = 100;
    for (i = 60; i <= showcounter; i++) {
        $select.append($('<option></option>').val(i).html(i));
    }
}

var addAPlayer = function(){
  baller = $('#nameInput').val();
  document.getElementById('nameInput').value = '';


  console.log(baller);
}
