$(document).ready(function() {
    // keep dropdown from covering menu button
    $(".dropdown-trigger").dropdown({ coverTrigger: false });

    // keep bottom columns same height
    function sameHeights(selector) {
        var selector = selector || '[data-key="sameHeights"]',
            query = $(selector),
            elements = query.length,
            max = 0;
        if (elements) {
            while (elements--) {
                let element = query[elements];
                if (element.clientHeight > max) {
                    max = element.clientHeight;
                }
            }
            elements = query.length;
            while (elements--) {
                let element = query[elements];
                element.style.height = max + "px";
            }
        }
    }
    // event listener for bottom columns
    $(window).on("resize", function() {
        sameHeights();
    });
    $(window).on("load", function() {
        sameHeights();
    });
});
