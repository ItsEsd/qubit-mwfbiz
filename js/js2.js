$('#backEditor').click(function(){
   $('#qbitbody').fadeIn('slow');
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
    $('#closest').hide();
    $('#storedbitspre').show();
  });
 
  var user = getCookie("_ybizc0");
  var usergu = getCookie("_ybizv0");
  var userel = getCookie("_ybize0");
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
  $(document).bind("contextmenu",function(e){
    return false;
      });
  readgenTOD();
}
else{
  $('#qbitbody').show();
}

function checkqbflag(flag){
  var userqb = getqbCookie("_ybizqb");
  // console.log(userqb);
  if(userqb == undefined){
setqbcookie(flag);
// ????? condition for First Visit..
  }
  else if (userqb > 2){
$('#loader_e').hide();
$('#vtfdback').slideDown('slow');
document.body.style.pointerEvents ="auto";
  }
  else{
    setqbcookie(userqb);
  }
}

function getqbCookie(cname){
  var name = cname + "="; 
  var decodedCookie = decodeURIComponent(document.cookie); 
  var ca = decodedCookie.split(';'); 
  for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     var cookstr = ca[i].split(name);
     if(cookstr[0] == ' '){
      return parseInt(cookstr[1]);
     }
}}

function setqbcookie(flagval){
  if(flagval >= 1){
flagval = flagval+1;
document.cookie = "_ybizqb="+flagval+";path=/;domain=mwfbiz.com";
  }
}