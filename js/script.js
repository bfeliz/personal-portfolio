$(document).ready(function() {
    // keep dropdown from covering menu button
    $(".dropdown-trigger").dropdown({ coverTrigger: false });

    // keep bottom columns same height
    function sameHeights(selector) {
        var selector = selector || '[data-key="sameHeights"]';
        const query = $(selector);
        let elements = query.length;
        let max = 0;
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
        sameHeights($(".about-col"));
        sameHeights($(".port-col"));
    });
    $(window).on("load", function() {
        sameHeights($(".about-col"));
        sameHeights($(".port-col"));
    });

    // menu scroll to element function
    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top
            },
            500,
            "linear"
        );
    });
});
