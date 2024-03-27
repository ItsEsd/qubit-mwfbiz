// Mind Without Fear - MWF
// ///////////////////// ©️ mwfbiz.COM
"use strict";
$("#backEditor").click(function () {
  $("#qbitbody").fadeIn("slow");
  $("#preview").hide();
  $("#editor").fadeIn("slow");
  $("#showandpost").fadeIn("slow");
  $("#imgcon").fadeIn("slow");
});

$(".mwimg").click(function () {
  $("#bizprost").toggle("fast");
});

$("#addqubit").click(function () {
  $("#addbit").toggle("fast");
  $("#closest").hide();
  $("#storedbits").hide();
  $("#bitlogin").show();
  $("#storedbitspre").toggle();
});

$("#closegubitst").click(function () {
  $("#addqubit").show();
  $("#storedbits").slideUp("slow");
  $("#storedbits").empty();
  $("#closest").hide();
  $("#storedbitspre").show();
});
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var user = getCookie("_ybizc0");
var usergu = getCookie("_ybizv0");
var userel = getCookie("_ybize0");
var userm = getCookie("_ybizm0");
function checkqbflag(flag) {
  var userqb = getqbCookie("_ybizqb");
  var userqxt = getqbCookie("_ybizqe");
  if (user !== "" || userm !== "") {
    setqbcookie(1);
  } else if (userqb == undefined) {
    setqbcookie(flag);
    // ????? condition for First Visit..
  } else if (userqb > 3 && userqxt == undefined) {
    $("#loader_e").hide();
    $("#vtfdback").slideDown("slow");
    document.getElementById("preview").style.filter = "blur(12px)";
    document.getElementById("preview").innerHTML = "";
    document.getElementById("preview").style.padding = "0px";
    document.body.style.pointerEvents = "auto";
  } else if (userqb < userqxt) {
    setqbcookie(userqb);
  } else if (userqb > userqxt) {
    $("#loader_e").hide();
    $("#vtfdback").slideDown("slow");
    document.getElementById("preview").style.filter = "blur(12px)";
    document.getElementById("preview").innerHTML = "";
    document.getElementById("preview").style.padding = "0px";
    document.body.style.pointerEvents = "auto";
  } else {
    setqbcookie(userqb);
  }
}

function setqbcookie(flagval) {
  if (flagval >= 0) {
    flagval = flagval + 1;
    document.cookie = "_ybizqb=" + flagval + ";path=/;domain=mwfbiz.com";
  }
}
function getqbCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    var cookstr = ca[i].split(name);
    if (cookstr[0] == " ") {
      return parseInt(cookstr[1]);
    }
  }
}
if (window.location !== window.parent.location) {
  $("#footrspns").html(
    '<div class="ifrmd"><span><a target="_blank" href="https://mwfbiz.com/privacy-policy/">Privacy Policy</a> | <a target="_blank" href="https://mwfbiz.com/terms-of-use/">Terms of Use</a> | <svg xmlns="http://www.w3.org/2000/svg" id="fullscreen-button" style="cursor:pointer;" onclick="toggleFullscreen(this);" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/></svg></span>© <a target="_blank" href="https://mwfbiz.com/">mwfbiz.COM</div>'
  );
  $("#qubitst").empty();
  document.getElementById("vtfdback").style.overflowY = "auto";
  document.getElementById("improfrm").style.maxHeight = "300px";
}
var fullscreenButton = document.getElementById("fullscreen-button");
var fullscreenElement = document.body;
function toggleFullscreen() {
  if (document.fullscreenElement) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}
function enterFullscreen() {
  var fullscreenElement = document.documentElement;

  if (fullscreenElement.requestFullscreen) {
    fullscreenElement
      .requestFullscreen()
      .then(function () {
        showFooter();
      })
      .catch(function (error) {
        window.open(window.location.href, "_blank");
      });
  } else if (fullscreenElement.mozRequestFullScreen) {
    // Firefox
    fullscreenElement
      .mozRequestFullScreen()
      .then(function () {
        showFooter();
      })
      .catch(function (error) {
        window.open(window.location.href, "_blank");
      });
  } else if (fullscreenElement.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    fullscreenElement
      .webkitRequestFullscreen()
      .then(function () {
        showFooter();
      })
      .catch(function (error) {
        window.open(window.location.href, "_blank");
      });
  } else if (fullscreenElement.msRequestFullscreen) {
    // IE/Edge
    fullscreenElement
      .msRequestFullscreen()
      .then(function () {
        showFooter();
      })
      .catch(function (error) {
        window.open(window.location.href, "_blank");
      });
  }
}

function showFrameFooter() {
  var footrspns = document.getElementById("footrspns");
  footrspns.innerHTML =
    '<div class="ifrmd"><span><a target="_blank" href="https://mwfbiz.com/privacy-policy/">Privacy Policy</a> | <a target="_blank" href="https://mwfbiz.com/terms-of-use/">Terms of Use</a> | <svg xmlns="http://www.w3.org/2000/svg" id="fullscreen-button" style="cursor:pointer;" onclick="toggleFullscreen(this);" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/></svg></span>© <a target="_blank" href="https://mwfbiz.com/">mwfbiz.COM</div>';
  if (footrspns) {
    footrspns.style.display = "block";
  }
}
function showFooter() {
  var footrspns = document.getElementById("footrspns");
  footrspns.innerHTML =
    '<div align="center" style="padding-bottom:10px;padding-top:6px;"><a target="_blank" href="https://www.mwfbiz.com/"><img src="../image/mwfLogo.gif" frameBorder="0" id="titleImg" style="pointer-events: none;float:center;background:transparent;" alt="mwfbiz.COM"></a></div>';
  if (footrspns) {
    footrspns.style.display = "block";
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}
document.addEventListener("fullscreenchange", handleFullscreenChange);
function handleFullscreenChange() {
  if (!document.fullscreenElement) {
    if (window.location !== window.parent.location) {
      showFrameFooter();
    } else {
      showFooter();
    }
  }
}

formwall.addEventListener("submit", (event) => {
  var sendur =
    "https://script.google.com/macros/s/AKfycby4DqWAvEb7MqrTf1NW_PyUKgFBcxjmObqgHQ7kPStijyay_TxHJFveyAKd_QXthY8J/exec";
  var qury = escape($("#dimprv").val());
  var name = $("#dname").val();
  var emid = $("#dmail").val();
  var url =
    sendur +
    "?callback=ctrlq&dmail=" +
    emid +
    "&dname=" +
    name +
    "&dimprv=" +
    qury +
    "&action=inexp";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
  $("#notif,#falqbody").show();
  $(".imgcon").hide();
  document.getElementById("improfrm").style.display = "none";
  Reset();
});

function Reset() {
  document.getElementById("formwall").reset();
}
