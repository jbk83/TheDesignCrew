$(window).scroll((e) => {
  if ($(this).scrollTop() > 150){
      $(".js-scrollNavbar").addClass("mod-boxshadow");
   } else {
      $(".js-scrollNavbar").removeClass("mod-boxshadow");
   }
});

$(() => {
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
