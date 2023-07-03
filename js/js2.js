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
  function getCookie(cname) { var name = cname + "="; var decodedCookie = decodeURIComponent(document.cookie); var ca = decodedCookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); } } return ""; } 
  var user = getCookie("_ybizc0");
  var usergu = getCookie("_ybizv0");
  var userel = getCookie("_ybize0");
function checkqbflag(flag){
  var userqb = getqbCookie("_ybizqb");
  var userqxt = getqbCookie("_ybizqe");
  if(userqb == undefined){
setqbcookie(flag);
// ????? condition for First Visit..
  }
  else if (userqb > 3 && userqxt==undefined){
$('#loader_e').hide();
$('#vtfdback').slideDown('slow');
document.getElementById('preview').style.filter='blur(12px)';
document.getElementById('preview').innerHTML = "";
document.getElementById('preview').style.padding="0px";
document.body.style.pointerEvents ="auto";
  }
  else if(userqb < userqxt){
    setqbcookie(userqb);
  }
  else if (userqb > userqxt){
    $('#loader_e').hide();
    $('#vtfdback').slideDown('slow');
    document.getElementById('preview').style.filter='blur(12px)';
    document.getElementById('preview').innerHTML = "";
    document.getElementById('preview').style.padding="0px";
    document.body.style.pointerEvents ="auto";
  }
  else{
    setqbcookie(userqb);
  }

}

function setqbcookie(flagval){
  if(flagval >= 0){
flagval = flagval+1;
document.cookie = "_ybizqb="+flagval+";path=/;domain=mwfbiz.com";
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
if ( window.location !== window.parent.location ) {
  $('#footrspns').html('<div class="ifrmd"><span><a target="_blank" href="https://mwfbiz.com/privacy-policy/">Privacy Policy</a> | <a target="_blank" href="https://mwfbiz.com/terms-of-use/">Terms of Use</a> | <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="fullscreen-button" style="cursor:pointer;" onclick="toggleFullscreen(this);" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/></svg></span>© <a target="_blank" href="https://mwfbiz.com/">mwfbiz.COM</div>');
  $('#qubitst').hide(); document.getElementById('vtfdback').style.overflowY = "auto";document.getElementById('improfrm').style.maxHeight = "300px";
} 
var fullscreenButton = document.getElementById('fullscreen-button');
var fullscreenElement = document.body;
  function toggleFullscreen(){
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }
  function enterFullscreen() {
    var fullscreenElement = document.documentElement;
  
    if (fullscreenElement.requestFullscreen) {
      fullscreenElement.requestFullscreen()
        .then(function () {
          hideFooter();
        })
        .catch(function (error) {
          window.open(window.location.href,'_blank');
        });
    } else if (fullscreenElement.mozRequestFullScreen) { // Firefox
      fullscreenElement.mozRequestFullScreen()
        .then(function () {
          hideFooter();
        })
        .catch(function (error) {
          window.open(window.location.href,'_blank');
        });
    } else if (fullscreenElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      fullscreenElement.webkitRequestFullscreen()
        .then(function () {
          hideFooter();
        })
        .catch(function (error) {
          window.open(window.location.href,'_blank');
        });
    } else if (fullscreenElement.msRequestFullscreen) { // IE/Edge
      fullscreenElement.msRequestFullscreen()
        .then(function () {
          hideFooter();
        })
        .catch(function (error) {
          window.open(window.location.href,'_blank');
        });
    }
  }
  
  function hideFooter() {
    var footrspns = document.getElementById('footrspns');
    if (footrspns) {
      footrspns.style.display = 'none';
    }
  }
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    $('#footrspns').css('display','block');
  } 
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  function handleFullscreenChange() {
    if (!document.fullscreenElement) {
      $('#footrspns').css('display','block');
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