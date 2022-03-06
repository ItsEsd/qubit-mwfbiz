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
  });

  $('#closegubitst').click(function(){
    $('#addqubit').show();$('#storedbits').slideUp('slow');$('#closegubitst').hide();
  });