$(document).ready(function () {
  //$("#home").show();

  $("nav a").click(function (e) {
    e.preventDefault();
    var page = $(this).attr("href");
    console.log($("div"));
    $("div").hide();
    $(page).show();
  });
});
