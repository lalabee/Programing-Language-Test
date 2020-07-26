$(document).ready(function () {
  $("form#formOne").submit(function (event) {

  const question1Input = $("input#question1").val();
  const question2Input = $("input#question2").val();
  const painterInput = $("input#painter").val();
  const transportationInput = $("input#transportation").val();
  const applianceInput = $("input#appliance").val();

    $(".js-question1").text(question1Input); 
    $(".js-question2").text(question2Input);
    $(".js-painter").text(painterInput);
    $(".js-transportation").text(transportationInput);
    $(".js-appliance").text(applianceInput);
  
    $("#story").show();
    event.preventDefault();
  
  })})