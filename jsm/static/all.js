var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://justmyscokshelp.com/article/";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
if (
  $(".thumb:first").data("src") ||
  $(".widget_ui_posts .thumb:first").data("src")
) {
  $(".thumb").lazyload({
    data_attribute: "src",
    placeholder: "https://justmyscokshelp.com/static/lazyloading.gif",
    threshold: 400
  });
  $(".widget_ui_posts .thumb").lazyload({
    data_attribute: "src",
    placeholder: "https://justmyscokshelp.com/static/lazyloading.gif",
    threshold: 400
  });
}
$(".search-show").bind("click", function () {
  $(this).find(".fa").toggleClass("fa-remove");
  $("body").toggleClass("search-on");
  if ($("body").hasClass("search-on")) {
    $(".site-search").find("input").focus();
    $("body").removeClass("m-nav-show");
  }
});
$("body").append('<div class="m-mask"></div>');
$("body").append($(".site-navbar").clone().attr("class", "m-navbar"));
$(".m-icon-nav").on("click", function () {
  $("body").addClass("m-nav-show");
  $(".m-mask").show();
  $("body").removeClass("search-on");
  $(".search-show .fa").removeClass("fa-remove");
});
$(".m-mask").on("click", function () {
  $(this).hide();
  $("body").removeClass("m-nav-show");
});
if ($("body").hasClass("search-results")) {
  var val = $(".site-search-form .search-input").val();
  var reg = eval("/" + val + "/i");
  $(".excerpt h2 a, .excerpt .note, .excerpt .meta").each(function () {
    $(this).html(
      $(this)
        .text()
        .replace(reg, function (w) {
          return "<b>" + w + "</b>";
        })
    );
  });
}
