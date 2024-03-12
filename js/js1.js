// Mind Without Fear - MWF
// ///////////////////// ©️ mwfbiz.COM
"use strict";
var oDoc, sDefTxt;
function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) {
    setDocMode(true);
  }
}
function formatDoc(sCmd, sValue) {
  if (validateMode()) {
    document.execCommand(sCmd, false, sValue);
    oDoc.focus();
  }
}
function validateMode() {
  if (!document.compForm.switchMode.checked) {
    return true;
  }
  oDoc.focus();
  return false;
}
function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
      oDoc.style.height = "350";
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}
function printDoc() {
  if (!validateMode()) {
    return;
  }
  var oPrntWin = window.open(
    "",
    "_blank",
    "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes"
  );
  oPrntWin.document.open();
  oPrntWin.document.write(
    '<!doctype html><html><head><title>Mind Without Fear | M W F</title><link rel="stylesheet\' href="/style/style.css"></head><body onload="print();" style="background:#161616;"><center><div style="width:100%;max-width:600px;text-align:left;background:#363636;color:#ffd703;word-wrap:break-word">' +
      oDoc.innerHTML +
      "</center></body></html>"
  );
  oPrntWin.document.close();
}
document.getElementById("crImage").addEventListener("input", prvwimg);

function prvwimg() {
  var imgS = document.getElementById("crImage").value;
  document.getElementById("previewImg").style.display = "block";
  document.getElementById("radioS").style.display = "block";
  document.getElementById("previewImg").innerHTML =
    '<img src="' + imgS + '" width="100%" height="240px">';
}

function toggleRadio(radioId) {
  console.log(radioId);
  var rdnum = radioId.split("rd");
  console.log(rdnum);
  for (var k = 1; k <= 3; k++) {
    var rdnm = "rd" + k;
    if (k == rdnum[1]) {
      document.getElementById(rdnm).checked = true;
      selectImg();
    } else {
      document.getElementById(rdnm).checked = false;
    }
  }
}
function addvdr() {
  formatDoc("insertHTML", "<hr style='border-color:grey;margin:0px;'><br>");
}
function selectImg() {
  var imgS = document.getElementById("crImage").value;
  document.getElementById("radioS").style.display = "block";
  if (imgS != "" && imgS != "http://") {
    if (document.getElementById("rd1").checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc("insertHTML", '<img src="' + imgS + '" class="img-small"/>');
    } else if (document.getElementById("rd2").checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc("insertHTML", '<img src="' + imgS + '" class="img-mid"/>');
    } else if (document.getElementById("rd3").checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc(
        "insertHTML",
        '<img class="limg" src="' +
          imgS +
          '" style="background:transparent;"/><br><br>'
      );
    } else {
      document.getElementById("previewImg").style.display = "none";
      return false;
    }
  } else {
    document.getElementById("previewImg").style.display = "none";
    return false;
  }
}
function CreateLink() {
  var sLnk = document.getElementById("crlink").value;
  if (sLnk != "" && sLnk != "http://") {
    formatDoc("createlink", sLnk);
  } else {
    return false;
  }
}
function getId(url) {
  var regExpYT =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var regExpVM = /^.*(vimeo.com\/)([^#\&\?]*).*/;
  var matchYT = url.match(regExpYT);
  var matchVM = url.match(regExpVM);

  if (matchYT && matchYT[2].length == 11) {
    return "https://www.youtube.com/embed/" + matchYT[2];
  } else if (matchVM) {
    return "https://player.vimeo.com/video/" + matchVM[2];
  } else {
    return "error";
  }
}
document.getElementById("crVideo").addEventListener("input", embed_vid);
function embed_vid() {
  document.getElementById("previewvid").style.display = "block";
  var link = document.getElementById("crVideo").value;
  var myId = getId(link);
  if (link != "" && link != "http://") {
    document.getElementById("previewvid").innerHTML =
      '<div class="emresp"><iframe src="' +
      myId +
      '" frameborder="0" allowfullscreen></iframe></div>';
    formatDoc(
      "insertHTML",
      '<br><div class="emresp"><iframe src="' +
        myId +
        '" frameborder="0" allowfullscreen></iframe></div><br>'
    );
  } else {
    return false;
  }
}
document.getElementById("crEmbed").addEventListener("input", embed_cod);
function embed_cod() {
  document.getElementById("previewembd").style.display = "block";
  var cd = document.getElementById("crEmbed").value;
  if (cd != "") {
    document.getElementById("previewembd").innerHTML =
      "<div class='embdcon'>" + cd + "</div>";
  } else {
    return false;
  }
}
function insrtCod() {
  var cd = document.getElementById("crEmbed").value;
  formatDoc("insertHTML", "<div class='embdcon'>" + cd + "</div><br>");
}
function myFunction() {
  var copyText = document.getElementById("copyto");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copied").innerHTML = "Copied";
}
document.getElementById("textBox").addEventListener("input", showInHtml);
function showInHtml() {
  var HTMin = document.getElementById("textBox").innerHTML;
  var htmTD = btoa(escape(HTMin));
  document.getElementById("inHtml").value = htmTD;
}
document.getElementById("postTD").addEventListener("click", postTOD);
function postTOD() {
  document.getElementById("msg").style.display = "none";
  var valHTM = document.getElementById("inHtml").value;
  if (valHTM != 0) {
    var postedTOD = JSON.stringify(document.getElementById("inHtml").value);
    var posts = JSON.parse(postedTOD);
    document.getElementById("genId").value =
      Math.random().toString(26).substring(2, 6) +
      Math.random().toString(26).substring(2, 6);
  } else {
    document.getElementById("p1").style.display = "none";
    document.getElementById("prepost").style.display = "block";
    document.getElementById("msg").style.display = "block";
    document.getElementById("msg").innerHTML = "Hello!";
    return false;
  }
  setTimeout(function () {
    jQuery("#msg").fadeOut("fast");
  }, 1000);
}
document.getElementById("textBox").addEventListener("input", limitChar);
function limitChar() {
  var valuee = jQuery("#inHtml").val();
  var str = String(valuee);
  var len = str.length;
  if (len >= 30000) {
    document.getElementById("CharExcd").style.display = "block";
    document.getElementById("poTOD").disabled = true;
    document.getElementById("confirmK").disabled = true;
  } else {
    document.getElementById("CharExcd").style.display = "none";
    document.getElementById("poTOD").disabled = false;
    document.getElementById("confirmK").disabled = false;
  }
}

jQuery("#confirmK").on("keyup", function () {
  var valuee = jQuery("#inHtml").val();
  var str = String(valuee);
  var len = str.length;
  if (jQuery("#genK").val() == jQuery("#confirmK").val() && len <= 30000) {
    jQuery("#message").html("Matching").css("font-size", "12px");
    document.getElementById("poTOD").disabled = false;
  } else {
    jQuery("#message")
      .html("Not Matching/ Limit Exceeded")
      .css("font-size", "12px");
    document.getElementById("poTOD").disabled = true;
  }
});
jQuery.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  jQuery.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || "");
    } else {
      o[this.name] = this.value || "";
    }
  });
  return o;
};
jQuery(function () {
  $("#confirmK").on("input", function () {
    document.getElementById("basehtm").value = JSON.stringify(
      $("form").serializeObject()
    );
    return false;
  });
});
function pasteFun() {
  document
    .querySelector("[contenteditable]")
    .addEventListener("paste", function (event) {
      event.preventDefault();
      document.execCommand(
        "inserttext",
        false,
        event.clipboardData.getData("text/plain")
      );
    });
}
function dateUp() {
  var d = new Date();
  var day = d.getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentTime =
    days[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    " - " +
    d.getFullYear();
  document.getElementById("dateQ").value = currentTime;
}

postTODT.addEventListener("submit", (event) => {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwUL6fFKpk-CinAXy61nSD2Xndy1v6ybbj-_HCTGnwG7Xic7KhdkMqaEDeDY9Yi1V7-";
  var urbit_ = ur1 + ur2 + "/exec";
  document.getElementById("poTOD").disabled = true;
  document.getElementById("loader-qb").style.display = "block";
  var creator = encodeURIComponent(JSON.stringify(jQuery("#creatorN").val()));
  var food = encodeURIComponent(JSON.stringify(jQuery("#genK").val()));
  var itemno = encodeURIComponent(JSON.stringify(jQuery("#genId").val()));
  var recip = encodeURIComponent(JSON.stringify(jQuery("#basehtm").val()));
  var splitString = splitStringByLength(recip, 4500);
  var clln = splitString.length;
  var urlmd = [];
  var urmi;
  var currentTime = jQuery("#dateQ").val();
  var creator1 = jQuery("#creatorN").val();
  var food1 = jQuery("#genK").val();
  var itemno1 = jQuery("#genId").val();
  var recip1 = jQuery("#basehtm").val();
  var kkasc = jQuery("#kkascii").val();
  if (creator1 != 0 && food1 != 0 && itemno1 != 0 && recip1 != 0) {
    for (var k = 0; k < clln; k++) {
      var urrl = urmi + k;
      urrl =
        urbit_ +
        "?callback=ctrlqinst&genId=" +
        itemno +
        "&creatorN=" +
        creator +
        "&basehtm=" +
        splitString[k] +
        "&genK=" +
        food +
        "&dateQ=" +
        currentTime +
        "&usrkk=" +
        kkasc +
        "&ptno=" +
        k +
        "&action=insertbit";
      urlmd[k] = urrl;
    }
    makeAjaxRequest(urlmd, 0);
    var element = document.getElementById("genstrngary");
    if (element !== null) {
      element.value = JSON.stringify(urlmd);
    } else {
      var elem = document.createElement("input");
      elem.id = "genstrngary";
      elem.value = "";
      elem.value = JSON.stringify(urlmd);
      elem.style.display = "none";
    }
    $("body").append(elem);
    document.getElementById("loader-potd").style.display = "block";
  } else {
    return false;
  }
  return false;
});

function splitStringByLength(str, length) {
  var nwaary = [];
  for (var i = 0; i < str.length; i += length) {
    nwaary.push(str.substring(i, i + length));
  }
  return nwaary;
}
function makeAjaxRequest(urlmi, ptn) {
  var request = $.ajax({
    crossDomain: true,
    url: urlmi[ptn],
    method: "GET",
    dataType: "jsonp",
  });
  request.fail(function (textStatus) {
    if (textStatus.status === 404) {
      request.abort();
      alert("Request aborted.");
    }
  });
}

function ctrlqinst(e) {
  var upsts = e.result.split("/");
  var arrystng = [];
  arrystng = JSON.parse(document.getElementById("genstrngary").value);
  var flln = arrystng.length;
  // console.log(e.result,arrystng);
  if (upsts[0] === "updated") {
    var upvl = parseInt(upsts[1]);
    var nxtcl = upvl + 1;
    if (nxtcl < flln) {
      makeAjaxRequest(arrystng, nxtcl);
    } else if ((nxtcl = flln)) {
      var creator = encodeURIComponent(
        JSON.stringify(jQuery("#creatorN").val())
      );
      var food1 = jQuery("#genK").val();
      var itemno1 = jQuery("#genId").val();
      document.getElementById("preId").value = itemno1;
      document.getElementById("preK").value = food1;
      document.getElementById("msg").style.display = "block";
      document.getElementById("whatsAppShare").style.display = "block";
      document.getElementById("copytoC").style.display = "block";
      document.getElementById("msg").innerHTML = "QuBit Stored.";
      var itemno1 = encodeURIComponent(JSON.stringify(jQuery("#genId").val()));
      var food1 = encodeURIComponent(JSON.stringify(jQuery("#genK").val()));
      var item = JSON.stringify(jQuery("#genId").val());
      var foodF = JSON.stringify(jQuery("#genK").val());
      document.getElementById("whatsAppShare").innerHTML =
        "<a title='Share On WhatsApp' class='ApShare' style='font-size:14px; text-decoration:none;color:#008000;background:#e6e6e6;padding:4px 10px;border-radius:4px;' type='button' target='_blank' href='https://wa.me/?text=" +
        creator +
        " has created a QuBit. Create your QuBit and share at https://qubit.mwfbiz.com. Shared QuBit ID : " +
        itemno1 +
        " Key: " +
        food1 +
        " N.B: Use at your own risk.' data-action='share/whatsapp/share'><i class='fa fa-whatsapp' style='font-size:28px;color:green;'></i></a><a title='Send SMS' class='ApShare' style='font-size:14px;margin-top:10px; text-decoration:none;color:#0c29cd;background:#e6e6e6;padding:4px 10px;border-radius:4px;' target='_parent' type='button' href='sms:?body=" +
        creator +
        " has created a QuBit. Create your QuBit and share at https://qubit.mwfbiz.com. Shared QuBit ID : " +
        itemno1 +
        " Key: " +
        food1 +
        " N.B: Use at your own risk.'><i class='fa fa-comments-o' style='font-size:28px;color:#0c29cd;'></i></a><a title='Send Mail' class='ApShare' style='font-size:14px;margin-top:10px; margin-left:6px;text-decoration:none;color:#0c29cd;background:#e6e6e6;padding:4px 10px;border-radius:4px;' target='_parent' type='button' href='mailto:?body=" +
        creator +
        " has created a QuBit. Create your QuBit and share at https://qubit.mwfbiz.com. Shared QuBit ID : " +
        itemno1 +
        " Key: " +
        food1 +
        " N.B: Use at your own risk.'><i class='fa fa-envelope' style='font-size:28px;color:#cc6600;'></i></a>";
      document.getElementById("copyto").value =
        "ID: " + item + " KEY: " + foodF;
      document.getElementById("genstrngary").value = "";
      document.getElementById("genK").value = "";
      document.getElementById("confirmK").value = "";
      document.getElementById("loader-qb").style.display = "none";
      var ndate = new Date().toDateString();

      var txtdn = "🌐 mwfbiz.COM - Mind Without Fear\n";
      txtdn += `
      ┌─  ╔═╗ ┬ ┬╔╗ ┬┌┬┐  ─┐
      │   ║═╬╗│ │╠╩╗│ │    │
      └─  ╚═╝╚└─┘╚═╝┴ ┴   ─┘ 
      \n`;
      txtdn += "https://qubit.mwfbiz.com \n";
      txtdn += "ID: " + item + " KEY: " + foodF + "\n";
      txtdn += "Date:" + ndate + "\n\n";
      txtdn +=
        "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ QuBit | Mind Without Fear - MWF";
      var blob = new Blob([txtdn], { type: "text/plain" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "QuBit_" + ndate + ".txt";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    } else {
      return;
    }
  }
}

document.getElementById("preTOD").addEventListener("click", readgenTOD);
function readgenTOD() {
  jQuery("#preview").hide();
  var itemnoT = jQuery("#preId").val();
  var foodF = jQuery("#preK").val();
  var itemno = encodeURIComponent(JSON.stringify(jQuery("#preId").val()));
  var food = encodeURIComponent(JSON.stringify(jQuery("#preK").val()));
  if (itemnoT != "" && foodF != "") {
    document.getElementById("loader_e").style.display = "block";
    document.getElementById("notfound").style.display = "none";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbxgoMJG_7w2prxxcsunJmr0eC3FwaY836OFJiUlU9U12br37Ovk3KmpWPzCPZSK7TLZ7g";
    var urbit = ur1 + ur2 + "/exec";
    var url =
      urbit +
      "?callback=ctrlqrdbit&preId=" +
      itemno +
      "&preK=" +
      food +
      "&action=genbit";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    document.getElementById("loaderTD").style.visibility = "hidden";
    return false;
  }
}
function ctrlqrdbit(e) {
  var res = e.records;
  var resdall = res[0].QuBitCon;
  var prepostpre = JSON.parse(JSON.parse(resdall));
  var inHTML = atob(prepostpre.QBContent);
  var Tim = res[0].TimeStamp;
  var Crby = res[0].Creator;
  var admnd = $("#kkascii").val();
  if (res != "ID not found!") {
    var usrl = getCookie("_ybize0");
    var ckusrel = usrl.split(".");
    var ext = "0";
    var nwon1 = [];
    var nwon2 = [];
    var kt = 1;
    if (
      usrl != "" &&
      res[0].RefId != "bizbebpi85gkgfhd4g58ld01n" &&
      admnd != res[0].RefId
    ) {
      for (var q = 1; q < ckusrel.length; q += 3) {
        if (window.atob(ckusrel[q]) == res[0].RefId) {
          ext = "V";
          nwon1[0] = ckusrel[0];
          nwon1[1] = ckusrel[q];
          nwon1[2] = ckusrel[q + 1];
          nwon1[3] = ckusrel[q + 2];
          var expires = "expires=" + ckusrel[q + 2];
        } else if (window.atob(ckusrel[q]) != res[0].RefId) {
          nwon2[kt] = ckusrel[q];
          nwon2[kt + 1] = ckusrel[q + 1];
          nwon2[kt + 2] = ckusrel[q + 2];
          kt = kt + 3;
        }
      }
      var nwckusr = nwon1.join(".") + nwon2.join(".");
      document.cookie =
        "_ybize0=" +
        nwckusr +
        "; expires=" +
        expires +
        ";path=/;domain=mwfbiz.com";
    }
    jQuery("#imgcon").hide();
    jQuery("#bizprost").hide();
    $("#falqbody,#qbitbody").hide();
    document.getElementById("editor").style.display = "none";
    document.getElementById("notfound").style.display = "none";
    document.getElementById("preview").style.display = "block";
    document.getElementById("previewPost").innerHTML = unescape(inHTML);
    document.getElementById("previewPostInf").innerHTML =
      "<span class='ppinfo' style='float:left;'>" +
      Tim +
      "</span><span class='ppinfo' style='float:right;'>Created By " +
      Crby +
      "</span>";
    document.getElementById("showandpost").style.display = "none";
    document.getElementById("loader_e").style.display = "none";
    jQuery("html,body").animate(
      {
        scrollTop: jQuery("#preview").offset().top,
      },
      1000
    );

    if (admnd == res[0].RefId) {
      document.body.style.pointerEvents = "auto";
    } else if (usrl != "" && ext == "V") {
      document.body.style.pointerEvents = "auto";
    } else if (res[0].RefId == "bizbebpi85gkgfhd4g58ld01n") {
      document.body.style.pointerEvents = "auto";
      checkqbflag(1);
      $(document).bind("contextmenu", function (e) {
        return false;
      });
    } else {
      flsdv();
    }
  } else {
    document.getElementById("loaderTD").style.display = "none";
    document.getElementById("loader_e").style.display = "none";
  }
}
function flsdv() {
  document.getElementById("preview").style.filter = "blur(12px)";
  document.getElementById("preview").innerHTML = "";
  document.getElementById("preview").style.padding = "0px";
  document.body.style.pointerEvents = "auto";
  $("#vtfdback").slideDown("slow");
  $(document).bind("contextmenu", function (e) {
    return false;
  });
  document.onkeydown = function (e) {
    return false;
  };
  $("#btnsubmit,.form-control,textarea").attr("disabled", "true");
  $("#adsescook").slideUp();
}

var mybutton = document.getElementById("preTOD");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
jQuery("#genK").keyup(function (e) {
  var strongRegex = new RegExp(
    "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*jQuery",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*jQuery",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{6,}).*", "g");
  if (false == enoughRegex.test(jQuery(this).val())) {
    jQuery("#passstrength").html("Too Short!");
    document.getElementById("confirmK").disabled = true;
    passstrength.style.display = "block";
  } else if (strongRegex.test(jQuery(this).val())) {
    jQuery("#passstrength").className = "ok";
    document.getElementById("confirmK").disabled = false;
    jQuery("#passstrength").html("Strong!");
  } else if (mediumRegex.test(jQuery(this).val())) {
    jQuery("#passstrength").className = "alert";
    jQuery("#passstrength").html("Medium!");
    document.getElementById("confirmK").disabled = false;
  } else {
    jQuery("#passstrength").className = "error";
    jQuery("#passstrength").html("Weak!");
    document.getElementById("confirmK").disabled = false;
  }
  return true;
});
function myFun() {
  var x = document.getElementById("showP2");
  if (x.style.display === "none") {
    x.style.display = "block";
    btnread.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function goBack() {
  window.open("https://www.mwfbiz.com", "_self");
}
jQuery("#backEditor").click(function () {
  jQuery("html,body").animate(
    {
      scrollTop: jQuery(".sticky").offset().top,
    },
    2000
  );
});
jQuery("#textBox").click(function () {
  jQuery("html,body").animate(
    {
      scrollTop: jQuery("#textBox").offset().top - 24,
    },
    1000
  );
});
jQuery("#openMI").click(function () {
  if (getCookie("_ybize0") != "") {
    $("#imgcon,#readDisc,#showandpost").show();
    $("#disclaim").hide();
  } else {
    $("#imgcon,#readDisc,#showandpost,#editor").show();
    $("#disclaim").hide();
  }

  jQuery("html,body").animate(
    {
      scrollTop: jQuery(".sticky").offset().top - 4,
    },
    1000
  );
});
stqubitfrm.addEventListener("submit", (event) => {
  var bitid = JSON.stringify(jQuery("#bitid").val());
  var bitpass = encodeURIComponent(JSON.stringify(jQuery("#bitpass").val()));
  if (bitid != 0 && bitpass != 0) {
    document.getElementById("loader_e").style.display = "block";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbxgoMJG_7w2prxxcsunJmr0eC3FwaY836OFJiUlU9U12br37Ovk3KmpWPzCPZSK7TLZ7g";
    var urbit = ur1 + ur2 + "/exec";
    var url =
      urbit +
      "?callback=fitbitfound&preId=" +
      bitid +
      "&preK=" +
      bitpass +
      "&action=genbit";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
});
function fitbitfound(e) {
  var res = e.records;
  if (res != "ID not found!") {
    document.getElementById("loader_e").style.display = "none";
    document.getElementById("stqubitfrm").style.display = "none";
    document.getElementById("stbitlogin").style.display = "block";
  } else {
    document.getElementById("stbitlogin").style.display = "none";
    document.getElementById("loader_e").style.display = "none";
    document.getElementById("stqubitfrm").style.display = "block";
  }
}
stbitlogin.addEventListener("submit", (event) => {
  var mailcheckQ = escape(jQuery("#mailcheck").val());
  var passcheckQ = escape(jQuery("#passcheck").val());
  if (mailcheckQ != 0 && passcheckQ != 0) {
    document.getElementById("loader_e").style.display = "block";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbxp0lzI_pWOpQlmbLoWC6_HM2lTCa6OxzOa1aba3gM2wc4bH3t-BXGA10cFbNXcOCU9Ng";
    var urbit = ur1 + ur2 + "/exec";
    var url =
      urbit +
      "?callback=userfound&heid=" +
      mailcheckQ +
      "&hepass=" +
      passcheckQ +
      "&action=hellobiz";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
});
function userfound(e) {
  var res = e.records;
  if (res != "ID not found!") {
    var mailcheckQ = escape(jQuery("#mailcheck").val());
    var passcheckQ = escape(jQuery("#passcheck").val());
    var bitidD = encodeURIComponent(JSON.stringify(jQuery("#bitid").val()));
    var bitpassD = encodeURIComponent(JSON.stringify(jQuery("#bitpass").val()));
    var urlbit1 = "https://script.google.com/macros/s/";
    var urlbit2 =
      "AKfycbxp5KXDO0gtJOG_QoiKhYo63kzs2FUItXTgP8TUWEFr0IQKHiVyi5qSlPM4Ngv-LEvC";
    var urlbit =
      urlbit1 +
      urlbit2 +
      "/exec" +
      "?callback=ctrlqbitstr&passcheck=" +
      passcheckQ +
      "&mailcheck=" +
      mailcheckQ +
      "&bitid=" +
      bitidD +
      "&bitpass=" +
      bitpassD +
      "&action=sttd";
    var request = jQuery.ajax({
      crossDomain: true,
      url: urlbit,
      method: "GET",
      dataType: "jsonp",
    });
    document.getElementById("check").style.display = "block";
    document.getElementById("loader_e").style.display = "none";
    document.getElementById("check").innerHTML = "Bit Stored";
    document.getElementById("stbitlogin").style.display = "none";
    document.getElementById("stqubitfrm").style.display = "block";
  } else {
    document.getElementById("stbitlogin").style.display = "block";
    document.getElementById("loader_e").style.display = "none";
  }
}
function ctrlqbitstr() {
  $("#storedbitspre").empty();
  $("#addbit").hide();
  stqubitfrm.reset();
  stbitlogin.reset();
  userCookie();
  setTimeout(function () {
    document.getElementById("check").innerHTML = "";
  }, 2000);
}
bitlogin.addEventListener("submit", (event) => {
  $("#addbit").hide();
  $("#storedbits").hide();
  $("#closest").hide();
  var mailcheckQ = escape(jQuery("#mailcheckB").val());
  var passcheckQ = escape(jQuery("#passcheckB").val());
  $("#storedbits").empty();
  if (mailcheckQ != 0 && passcheckQ != 0) {
    document.getElementById("loader_e").style.display = "block";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbxp0lzI_pWOpQlmbLoWC6_HM2lTCa6OxzOa1aba3gM2wc4bH3t-BXGA10cFbNXcOCU9Ng";
    var urbit = ur1 + ur2 + "/exec";
    var url =
      urbit +
      "?callback=userallbit&heid=" +
      mailcheckQ +
      "&hepass=" +
      passcheckQ +
      "&action=hellobiz";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
});
function userallbit(e) {
  var res = e.records;
  if (res != "ID not found!") {
    $("#addqubit").hide();
    $("#storedbitspre").hide();
    document.getElementById("closest").style.display = "block";
    document.getElementById("proholdername").innerHTML =
      res[0].FirstName + " " + res[0].LastName;
    var k = JSON.parse(JSON.stringify(res[0].QBstored));
    var k2 = k.split(",");
    var len = k2.length;
    var halflen = len / 2;
    for (var i = 0; i <= len - 1; i++) {
      document.getElementById("loader_e").style.display = "none";
      document.getElementById("closest").style.display = "block";
      document.getElementById("storedbits").style.display = "block";
      document.getElementById("storedbits").innerHTML +=
        "<div style='border-bottom:1px solid grey;padding-top:10px;padding:10px;padding-bottom:10px;background-color:white;text-align:left;'>" +
        (i + 2) / 2 +
        ".<br>QuBit ID: " +
        JSON.parse(k2[i]) +
        "<br>Key: " +
        JSON.parse(k2[i + 1]) +
        "<br><span style='float:right;padding-right:10px;padding-top:10px;'><button type='button' class='stqubitshow' onclick='opnmnualqbt(this)'>Open in New Tab</button></span><br><br>" +
        "<input class='qbidst' value='" +
        k2[i] +
        "'><input class='keyidst' value='" +
        k2[i + 1] +
        "'></div>";
      i = i + 1;
    }
    $("#closegubitst").show();
  } else {
    document.getElementById("storedbits").innerHTML = "";
    document.getElementById("loader_e").style.display = "none";
  }
}
function opnmnualqbt(label) {
  var list = document.getElementsByClassName("stqubitshow");
  list = [].slice.call(list);
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName("qbidst");
  var y = document.getElementsByClassName("keyidst");
  var qbid = window.btoa(JSON.parse(x[posofinput].value));
  var kqid = window.btoa(JSON.parse(y[posofinput].value));
  var newlk =
    "https://qubit.mwfbiz.com?qbid=" + qbid + "&no=yes" + "&bizk=" + kqid;
  window.open(newlk, "_blank");
}
function showqubitdash() {
  document.getElementById("bitstboard").style.height = "100%";
}
function closequbitdash() {
  document.getElementById("bitstboard").style.height = "0";
}
$("#loader_e").click(function () {
  $("#loader_e").hide();
});
function fal() {
  return false;
}

const openModalButtontk = document.getElementById("opntlkt");
const modaltk = document.getElementById("admntlkt");

openModalButtontk.addEventListener("click", () => {
  modaltk.style.display = "block";
});

window.addEventListener("click", (event) => {
  if (event.target === modaltk) {
    modaltk.style.display = "none";
  }
});
