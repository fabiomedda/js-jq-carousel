$(function () {
  
  var next = $(".next");
  var prev = $(".prev");
  next.click(function () {
    $(".active").next().addClass("active");
    $(".active").prev().removeClass("active");
  })

  prev.click(function () {
    $(".active").prev().addClass("active");
    $(".active").next().removeClass("active");
  })

  $("i.first").addClass("1");
  $("i.first").next().addClass("2");
  $("i.last").prev().addClass("3");
  $("i.last").addClass("4");

  $("img.first").addClass("1");
  $("img.first").next().addClass("2");
  $("img.last").prev().addClass("3");
  $("img.last").addClass("4");


  $("i.1").click(function () {
    $(".1").addClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
  });

  $("i.2").click(function () {
    $(".1").removeClass("active");
    $(".2").addClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
  });

  $("i.3").click(function () {
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").addClass("active");
    $(".4").removeClass("active");
  });

  $("i.4").click(function () {
    $(".1").removeClass("active");
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").addClass("active");
  });

});
