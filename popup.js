//Authors: Árni Reynir Óskarsson and Brynjólfur Jón Hermannsson

var FRIDAY = 5;

var fridayChecker = {

  showIfFriday : function() {
    var date = new Date();
    var day = date.getDay();

    if( FRIDAY === day ) {
      var p = document.createElement('p');
      var txt = document.createTextNode("Það er föstudagur")
      p.appendChild(txt);
      document.body.appendChild(p);
      console.log("Friday");
    } else {
      var p = document.createElement('p');
      var txt = document.createTextNode("Það EKKI föstudagur")
      p.appendChild(txt);
      document.body.appendChild(p);
      console.log("Not Friday");
    }
  }


}
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  fridayChecker.showIfFriday();
});


