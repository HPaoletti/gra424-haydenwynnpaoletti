$(".navClass").hide();


var $hamburger = $(".hamburger");
$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});


$(".hamburger").click(function () {
  $(".navClass").fadeToggle( 500, "swing");
})