$(() => {
  $(".js-showPanel").click((e) => {
    var data = $(e.currentTarget).data("target");
    $(".mod-visible").removeClass("mod-visible");
    $(".active").removeClass("active");
    $(e.currentTarget).parent().addClass("active");
    $(e.currentTarget).addClass("active");
    $("#" + data).addClass("mod-visible");
  });

  $(".js-selectHome").change((e) => {
    var data = $('option:selected').val();
    $(".mod-visible").removeClass("mod-visible");
    $("#" + data).addClass("mod-visible");
  });
});
