$(document).ready(function() {
$(".clickable").click(function() {
  $("storyShowing").toggle();
  $("storyHidden").toggle();
});
$("form#formOne").submit(function (event) {
  const question1Input = $("input#question1").val();
  const question2Input = $("input#question2").val();
  const painterInput = $("input#painter").val();
  const exclamationInput = $("input#exclamation").val();
  const transportationInput = $("input#transportation").val();
  const applianceInput = $("input#appliance").val();

    $(".question1").text("question1Input"); 
    $(".question2").text("question2Input");
    $(".painter").text("painterInput");
    $(".exclamation").text("exclamationInput"),
    $(".transportation").text("transportationInput"),
    $(".appliance").text("applianceInput");
});
    $("event").preventDefault (); {
}
})
