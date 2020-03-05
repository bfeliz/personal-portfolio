$(document).ready(function() {
    // keep dropdown from covering menu button
    $(".dropdown-trigger").dropdown({ coverTrigger: false });

    // keep bottom columns same height
    function sameHeights(selector) {
        let sel = selector || '[data-key="sameHeights"]';
        const query = $(sel);
        let elements = query.length;
        let max = 0;
        if (elements) {
            // note for Tucker ----- I feel like perhaps I am missing a jQuery way to do the below, I know about the .css() method of course but couldn't really figure out how to attach it to the variable "element" instead of a specific piece of HTML...
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
