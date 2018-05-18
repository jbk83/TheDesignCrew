$(window).scroll((e) => {
  if ($(this).scrollTop() > 150){
      $(".js-scrollNavbar").addClass("mod-boxshadow");
   } else {
      $(".js-scrollNavbar").removeClass("mod-boxshadow");
   }
});
