$(window).scroll((e) => {
  if ($(this).scrollTop() > 150){
      $(".js-scrollNavbar").addClass("mod-boxshadow");
   } else {
      $(".js-scrollNavbar").removeClass("mod-boxshadow");
   }
});

$(".js-navbarMenu").on("click", (event) => {
  let listItem = $(".navbar-listitem");
  if (listItem.hasClass("collapse")) {
    listItem.removeClass("collapse");
  } else {
    listItem.addClass("collapse");
  }
});

$(() => {
  if ($(window).width() < 992) {
    $(".navbar-listitem").addClass("collapse");
  }
  $(".js-navbar").on("click", (event) => {
    event.preventDefault();

    let target = $(event.target.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);

    if (target.length) {
      $("html,body").stop().animate({
        scrollTop: target.offset().top - $(".js-scrollspy").height()
      }, 1000);
    }
  });
});
