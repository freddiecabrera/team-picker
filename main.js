$(document).ready(init);
function init(){
  numOfPlayers();
}

var numOfPlayers = function() {
  var $select = $(".dropdownMenu");
  var showcounter = 100;
    for (i = 60; i <= showcounter; i++) {
        $select.append($('<option></option>').val(i).html(i));
    }
}
