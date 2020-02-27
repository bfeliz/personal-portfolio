$(document).ready(function() {
    // keep dropdown from covering menu button
    $(".dropdown-trigger").dropdown({ coverTrigger: false });

    // keep bottom columns same height
    function sameHeights(selector) {
        var selector = selector || '[data-key="sameHeights"]',
            query = document.querySelectorAll(selector),
            elements = query.length,
            max = 0;
        if (elements) {
            while (elements--) {
                var element = query[elements];
                if (element.clientHeight > max) {
                    max = element.clientHeight;
                }
            }
            elements = query.length;
            while (elements--) {
                var element = query[elements];
                element.style.height = max + "px";
            }
        }
    }
    // event listener for bottom columns
    if ("addEventListener" in window) {
        window.addEventListener("resize", function() {
            sameHeights();
        });
        window.addEventListener("load", function() {
            sameHeights();
        });
    }
});
