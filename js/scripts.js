$(document).ready(function(){
  $(".userForm").submit(function(event) {
    event.preventDefault();
    var inputname = $("#userName").val();
    var inputaddress = $("#userAddress").val();
    var inputCity = $("#userCity").val();
    var inputstate = $("#userState").val();

  $("#receiptName").text(inputname);
  $("#receiptCity").text(inputCity);
  $("#receiptState").text(inputstate);
  $("#receiptaddress").text(inputaddress);

  $(".shopForm").show();
  $(".userForm").hide();

  });

$(".shopForm").submit(function(event) {
  event.preventDefault();

  var toporder = $("#tops").val();
  var bottomorders = $("#bottoms").val();
  var shoeorders = $("#shoes").val();

  $(".receiptOrders").append("<li>" + toporder + "</li>" + "<li>" + bottomorders + "</li>" + "<li>" + shoeorders + "</li>");
  $(".receipt").show();
  $(".shopForm").hide();

  });
});
