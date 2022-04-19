$('#backEditor').click(function(){

    $('#preview').hide();
    $('#editor').fadeIn("slow");
    $('#showandpost').fadeIn("slow");
    $("#imgcon").fadeIn("slow");
  });

  $('.mwimg').click(function(){

    $('#bizprost').toggle("fast");
  });

  $('#addqubit').click(function(){
    $('#addbit').toggle('fast');
    $('#closest').hide();
    $('#storedbits').hide();
    $('#bitlogin').show();
    $('#storedbitspre').toggle();
  });

  $('#closegubitst').click(function(){
    $('#addqubit').show();$('#storedbits').slideUp('slow');
    $('#storedbits').empty();
    $('#closegubitst').hide();
    $('#storedbitspre').show();
  });
 

var url_string = window.location.href;
var url = new URL(url_string);
var q = window.atob(url.searchParams.get("qbid"));
var k = window.atob(url.searchParams.get("bizk"));
var r = url.searchParams.get("no");
if(r =="yes"){
  document.getElementById('preId').value= q;
  document.getElementById('preK').value= k;
  $('#backEditor,#qbitbody').hide();
  $('#falqbody').show();
  readgenTOD();
}
else{
  $('#qbitbody').show();
}

