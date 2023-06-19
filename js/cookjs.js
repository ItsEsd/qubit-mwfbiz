function getCookie(cname) {
  var name = cname + "="; 
  var decodedCookie = decodeURIComponent(document.cookie); 
  var ca = decodedCookie.split(';'); 
  for (var i = 0; i < ca.length; i++) {
     var c = ca[i]; while (c.charAt(0) == ' ') { c = c.substring(1); } 
     if (c.indexOf(name) == 0) { 
      var cookstr = ca[i].split(name);
      var cook = cookstr[1].split(".");
      var paem = window.atob(cook[1]);
      if(cname =="_ybizc0"){
        userprofetch(paem);
        document.getElementById('kkascii').value= paem;
      }
      return c.substring(name.length, c.length); } 
    } return ""; } 
        var user = getCookie("_ybizc0");
        var usergu = getCookie("_ybizv0");
        var userel = getCookie("_ybize0");
        if (user != "" ) {
            
  var decodedCookie = decodeURIComponent(document.cookie); 
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]; 
    while (c.charAt(0) == ' ') { c = c.substring(1); 
    } 
    if (c.indexOf("_ybizc0") == 0) { 
      var userelcook = c.substring(1).split('.');
      if(window.atob(userelcook[0].split('ybizc0=')[1]) =="BIZADMN" && window.atob(userelcook[2]) =="valid"){ 
        $('#falqbody').hide();
        document.getElementById('falsebacksigup').style.display = "none";
        document.getElementById('sigcontainer').style.display = "none";
       }
    } 
   }
        } 
      else  if (userel != "" ) {
        document.getElementById("imgcon").style.pointerEvents = "none";
        $('#qubitst,#backEditor').hide();
        setTimeout(function(){
          $('#editor').fadeOut('slow');
          $('#showandpost').show();},100);
          var lem = document.createElement('div');
          lem.id="frelt";
          // lem.innerHTML= "<iframe src='https://imi.mwfbiz.com/'></ifarme>"
          lem.innerHTML= "<iframe src='http://127.0.0.1:5503/'></ifarme>"
          $('#showandpost').append(lem);
          $(document).bind("contextmenu",function(e){
            return false;
              });
        } 
        else if(usergu != ""){
          document.getElementById("imgcon").style.pointerEvents = "none";
          document.getElementById('qbitbody').style.display = "none";
          $('#qubitst').hide();
          var url_string = window.location.href;
          var url = new URL(url_string);
          var q = window.atob(url.searchParams.get("qbid"));
          var k = window.atob(url.searchParams.get("bizk"));
          var r = url.searchParams.get("no");
          if(r =="yes"){
            document.body.style.pointerEvents = "none";
            document.getElementById('preId').value= q;
            document.getElementById('preK').value= k;
            $('#backEditor,#qbitbody').hide();
            $('#falqbody').show();
            readgenTOD();
            checkqbflag(1);
          }
          else{
            setTimeout(function(){
              window.open('https://feed.mwfbiz.com/qubit-by-mbit','_self');
              $('#falsebacksigup').fadeIn('fast');
              $('#sigcontainer').fadeIn('fast');},100);
          }
          $(document).bind("contextmenu",function(e){
            return false;
              });
        }
        else {
            window.open("https://www.mwfbiz.com/", "_self");
        }
        function deleteAllCookies() {
          var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i];
              var eqPos = cookie.indexOf("=");
              var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
              document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mwfbiz.com";
          }
          setTimeout(function(){location.reload();},2000);
      }    
function userCookie(){
  var udid = $('#kkascii').val();
  userprofetch(udid);}
function userprofetch(paem){
var ur1="https://script.google.com/macros/s/";
var ur2="AKfycbws_LnpAxZ6MMQK568aMZSOTAFsA2hdFDJkaB9m8aXcwZ9pciuZehl8ocXkRWADIH2dRA";
var ul1 =ur1+ur2+"/exec";
var url = ul1 + "?callback=profetch&usrd=" + paem  + "&action=bizbid";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"
});}
function profetch(e){
var res = e.records; 
if(res!="ID not found!"){
document.getElementById('bizuserin').innerHTML ="<div class='bizusrp'>BIZ user: "+res[0].FirstName+" "+res[0].LastName+"<br>User email: "+res[0].Email+"</div>";
document.getElementById('bizprost').style.backgroundImage = "none";
var k = JSON.parse(JSON.stringify(res[0].QBstored));
 var k2 = k.split(",");
 var len = k2.length;
if(k!=""){
 for(var i = 0; i<=len -1;i++){
    document.getElementById("storedbitspre").style.display = "block";
    document.getElementById("storedbitspre").innerHTML +="<button type='button' class='stqubitshow' >"+
    "<div class='prestqbit'><div class='sharebiton' title='Copy Link' onclick='crcpbitlink(this)'><svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-link-45deg' viewBox='0 0 16 16'> <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'/> <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'/></svg></div><div class='opntb' title='Open in New Tab' onclick='opnqbntb(this)'><svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-box-arrow-in-up-right' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z'/><path fill-rule='evenodd' d='M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z'/></svg></div><div class='embdbtn' title='Embed' onclick='emdbqbt(this)'><svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-code-slash' viewBox='0 0 16 16'><path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' /></svg></div><h1>"+(i+2)/2+"</h1><hr><p title='Show' class='showqubitok' onclick='showstqubitok(this)'>QuBit ID: "+ JSON.parse(k2[i])+"<br>Key: "+JSON.parse(k2[i+1])+
    "</p></div></button>"+
    "<input class='qbidst' value='"+k2[i]+"'><input class='keyidst' value='"+k2[i+1]+"'>";
    i=i+1;
 }}}}
function showstqubitok(label){
  var list=document.getElementsByClassName("showqubitok");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('qbidst');
  var y = document.getElementsByClassName('keyidst');
       var qbid = x[posofinput].value;
       var kqid = y[posofinput].value;
     //  document.getElementById('storedbits').style.pointerEvents = "none";
       document.getElementById('stqbid').value= qbid;
       document.getElementById('stkeyid').value= kqid;
       document.getElementById('posof').value= posofinput;
       document.getElementById('preId').value=JSON.parse(qbid);
       document.getElementById('preK').value= JSON.parse(kqid);
       closequbitdash();
       readgenTOD();}
function emdbqbt(label){
  var list=document.getElementsByClassName("embdbtn");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('qbidst');
  var y = document.getElementsByClassName('keyidst');
       var qbid = window.btoa(JSON.parse(x[posofinput].value));
       var kqid = window.btoa(JSON.parse(y[posofinput].value));
  var crlnk = "https://qubit.mwfbiz.com?qbid="+qbid+"&bizk="+kqid+"&no=yes";
  var newlk ='<iframe src="'+crlnk+'" style="width:100%;max-width:600px;height:500px;border:0px;"></iframe>';
  var str= "<div>Code Copied!</div>"
  copybitlink(newlk,str);

}
function opnqbntb(label){
  var list=document.getElementsByClassName("opntb");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('qbidst');
  var y = document.getElementsByClassName('keyidst');
       var qbid = window.btoa(JSON.parse(x[posofinput].value));
       var kqid = window.btoa(JSON.parse(y[posofinput].value));
  var newlk = "https://qubit.mwfbiz.com?qbid="+qbid+"&bizk="+kqid+"&no=yes";
  window.open(newlk, "_blank");
}
function crcpbitlink(label){
  var list=document.getElementsByClassName("sharebiton");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('qbidst');
  var y = document.getElementsByClassName('keyidst');
       var qbid = window.btoa(JSON.parse(x[posofinput].value));
       var kqid = window.btoa(JSON.parse(y[posofinput].value));
  var newlk = "https://qubit.mwfbiz.com?qbid="+qbid+"&bizk="+kqid+"&no=yes";
var str= "<div>Link Copied!</div>"
  copybitlink(newlk,str);}
function copybitlink(newlk,str){
  var textA = document.createElement("input");
  textA.value = newlk;
  textA.select();
  textA.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textA.value);
  $('#lkcopied').html(str);
  $('#lkcopied').slideDown('fast');
  setTimeout(function(){$('#lkcopied').slideUp('fast');},2000);}

  $('#adsescook').click(function(){
    $('#cooklist').toggle();
    var objDiv = document.getElementById("improfrm");
    objDiv.scrollTop = objDiv.scrollHeight;
  });
  document.getElementById('selckls').addEventListener('input',assignprc);
  function assignprc(){
    var assgnvl = document.getElementById('selckls').value;
    document.getElementById('conckadd').innerHTML ="Pay: ₹" + assgnvl;
  }

  $('#conckadd').click(function(){
    var assgnvl = document.getElementById('selckls').value;
    var extndrld = assgnvl/20;

 var optionsv = {
    "key": "rzp_live_zeJJQym7llbiEc",
    "amount":  assgnvl*100,
    "currency": "INR",
    "name": "Session Cookie",
    "image": "../image/mwfbizlogo.png",
    "callback_url": "https://mwfbiz.com/privacy-policy/",
    "handler": function(response) {
      var payid = response.razorpay_payment_id;
      var peid = "Visitor";
      var psign = "Visitor";
      var refid = "qbt" + Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date();
      var currentTime = d.toLocaleString();
      var ur1 = 'https://script.google.com/macros/s/';
      var ur2 = 'AKfycbxpVqtT4y1MDj4B1oc-VWI4-fhV3kqDJxzUSyNnkJ_wmQYajdXlU3qtjHdvYzDNEorJ5g';
      var url = ur1 + ur2 + '/exec' + '?callback=ctrlqpcheck&tstamp=' + currentTime + '&tpid=' + payid + '&torid=' + peid + '&tpsign=' + psign + '&refid=' + refid + '&action=paycheck';
      var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
  document.cookie = "_ybizqe="+extndrld+";path=/;domain=mwfbiz.com";
  document.cookie = "_ybizqb=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mwfbiz.com";
  setTimeout(function() {
    location.reload();
  }, 2000);
    },
    "theme": {
      "color": "#dd1d16"
    }
  };
  var rzpv = new Razorpay(optionsv);
  rzpv.open();
  e.preventDefault(); 

  })