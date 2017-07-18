<<<<<<< HEAD

=======
>>>>>>> 250e0e31e395beb42b3c8a5c0333b0616dfce1f6
var list = [];
$( "form" ).submit(function( event ) {
event.preventDefault();
    var fn = document.getElementById("FN").val;
    var ln =  document.getElementById("LN").val;
    var sn =  document.getElementById("SN").val;
list.push({fn: fn, ln: ln, sn : sn});
console.log(list);
});
