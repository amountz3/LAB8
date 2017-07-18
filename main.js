var list = [];
$( "form" ).submit(function( event ) {
event.preventDefault();
    var fn = $('#FN').val();
    var ln =  $('#LN').val();
    var sn =  $('#SN').val();
list.push({fn: fn, ln: ln, sn : sn});
console.log(list);
});
