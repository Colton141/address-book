$(document).ready(function(){
  $("button#add").click(function(event){
    var nameInput = $("input#person").val();
    var addressInput = $("input#address").val();
    var phoneInput = $("input#phone-number").val();
    var emailInput = $("input#email-address").val();
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".phone").text(phoneInput);
    $(".email").text(emailInput);
    event.preventDefault();
  });
});

  //
  // $("#address-form").submit(function(event) {
  //   var nameInput = $("input#name").val();
  //   var addressInput = $("input#address").val();
  //   var phoneNumberInput = $("input#phone-number").val();
  //   var emailAdressInput = $("input#email-address").val();
