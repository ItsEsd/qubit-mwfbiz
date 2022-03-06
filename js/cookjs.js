function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
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
        if (user != "" ) {
        document.getElementById('falsebacksigup').style.display = "none";
        document.getElementById('sigcontainer').style.display = "none";
        userCookie();
        } 
      else  if (userel != "" ) {
        document.getElementById("imgcon").style.pointerEvents = "none";
        userCookie();
        setTimeout(function(){
          $('#falsebacksigup').fadeIn('fast');
          $('#sigcontainer').fadeIn('fast');},1800000);
        } 
        else if(usergu != ""){
          document.getElementById("imgcon").style.pointerEvents = "none";
          userCookie();
          setTimeout(function(){
                $('#falsebacksigup').fadeIn('fast');
                $('#sigcontainer').fadeIn('fast');},600000);
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

      
function userCookie() {
   var decodedCookie = decodeURIComponent(document.cookie); 
   var ca = decodedCookie.split(';'); 
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i]; 
      var cookstr = ca[i].split('=');
      var cookpost = cookstr[1].split('.');  
   if(cookpost[1] != null){
            var cookusid = String(cookpost[1]);
            var paem = window.atob(cookusid);
            userprofetch(paem);
   }

     } 
 
 }

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
});

}

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
    document.getElementById("storedbitspre").innerHTML +="<button type='button' class='stqubitshow' onclick='showstqubite(this)'><div class='prestqbit'><h1>"+(i+2)/2+"</h1><hr><p>QuBit ID: "+ JSON.parse(k2[i])+"<br>Key: "+JSON.parse(k2[i+1])+
    "</p></button>"+
    "<input class='qbidst' value='"+k2[i]+"'><input class='keyidst' value='"+k2[i+1]+"'></div>";
    i=i+1;
 }
}
}
}