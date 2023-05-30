let html = $("html");
let page = 0;
html.animate({ scrollTop: 0 }, 10);

// window.addEventListener("wheel", function (e) {
//     e.preventDefault();
// }, { passive: false });

$(window).on("wheel", function (e) {
    
    if (html.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (page == 2) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
    }
    var posTop = (page - 1) * $(window).height();
    html.animate({ scrollTop: posTop });
});