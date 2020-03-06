$(document).ready(function() {
    // enable floating action button
    $(".fixed-action-btn").floatingActionButton({
        direction: "right"
    });

    // keep bottom columns same height
    function sameHeights(selector) {
        $(selector).css("height", "fit-content");
        let sel = selector || '[data-key="sameHeights"]';
        const query = $(sel);
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
                $(element).css("height", max + "px");
            }
        }
    }

    // event listener for column height match
    $(window).on("resize", function() {
        console.log("Is reading size");
        sameHeights($(".about-col"));
        sameHeights($(".port-col"));
        sameHeights($(".contact-col"));
    });

    $(window).on("load", function() {
        sameHeights($(".about-col"));
        sameHeights($(".port-col"));
        sameHeights($(".contact-col"));
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
