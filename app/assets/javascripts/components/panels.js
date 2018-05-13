$(() => {
  $(".js-showPanel").click((e) => {
    var data = $(e.currentTarget).data("target");
    $(".mod-visible").removeClass("mod-visible");
    $(".active").removeClass("active");
    $(e.currentTarget).parent().addClass("active");
    $(e.currentTarget).addClass("active");
    $("#" + data).addClass("mod-visible");
  });
});
