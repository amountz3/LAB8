var list = [];
$( "form" ).submit(function( event ) {
event.preventDefault();
    var fn = document.getElementById("FN").val;
    var ln =  document.getElementById("LN").val;
    var sn =  document.getElementById("SN").val;
list.push({fn: fn, ln: ln, sn : sn});
console.log(list);
});
