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
  if(userqb == undefined){
setqbcookie(flag);
// ????? condition for First Visit..
  }
  else if (userqb > 2){
$('#loader_e').hide();
$('#vtfdback').slideDown('slow');
document.getElementById('preview').style.filter='blur(12px)';
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
// /////////GET SET CARET ////////// FOR TEXTAREA ////

// var ctrl = document.getElementById("textarea"); 
// function getCaretPosition(ctrl) {
//   if (document.selection) {
//     ctrl.focus();
//     var range = document.selection.createRange();
//     var rangelen = range.text.length;
//     console.log(rangelen);
//     range.moveStart('character', -ctrl.value.length);
//     var start = range.text.length - rangelen;
//     return {
//       'start': start,
//       'end': start + rangelen
//     };
//   } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
//     return {
//       'start': ctrl.selectionStart,
//       'end': ctrl.selectionEnd
//     };
//   } else {
//     return {
//       'start': 0,
//       'end': 0
//     };
//   }
// }

// function setCaretPosition(ctrl, start, end) {
//   if (ctrl.setSelectionRange) {
//     ctrl.focus();
//     ctrl.setSelectionRange(start, end);
//   } else if (ctrl.createTextRange) {
//     var range = ctrl.createTextRange();
//     range.collapse(true);
//     range.moveEnd('character', end);
//     range.moveStart('character', start);
//     range.select();
//   }
// }

// jQuery(document).ready(function() {
//     jQuery("#textBox").click(function() {
//       setCaretPosition(jQuery("#textBox")[0], jQuery("#5eeb136").val(), jQuery("#5eeb136").val());
//     });
//     jQuery("#setselection").click(function() {
//       setCaretPosition(jQuery("#textBox")[0], jQuery("#5eeb137").val(), jQuery("#5eeb138").val());
//     });
//     jQuery("#textBox").on('click',function() {
//       var pos = getCaretPosition(jQuery("#textBox")[0]);
//       console.log(pos.start);
//       if (pos.start == pos.end) {
//         console.log("Current caret position: " + pos.start);
//       } else {
//         console.log("Selection starts at " + pos.start + " and ends at " + pos.end);
//       }
//     });
// });