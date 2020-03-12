$(document).ready(function() {
    // enable floating action button
    $(".fixed-action-btn").floatingActionButton({
        direction: "right"
    });

    $(".tooltipped").tooltip();

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

    $("#portfolio-sub-1").hover(
        function() {
            changeIcon();
        },
        function() {}
    );

    function changeIcon() {
        const icons = [
            "assets/weather/clouds.png",
            "assets/weather/dark-cloud-rain.png",
            "assets/weather/dark-cloud.png",
            "assets/weather/dark-sun.png",
            "assets/weather/light-lightening.png",
            "assets/weather/lightning.png",
            "assets/weather/moon-cloud.png",
            "assets/weather/partial.png",
            "assets/weather/rain-sun.png",
            "assets/weather/rain.png",
            "assets/weather/snow-2.png",
            "assets/weather/snow.png",
            "assets/weather/sun.png"
        ];
        const randIcon = icons[Math.floor(Math.random() * icons.length)];

        $(".wIcons").attr("src", randIcon);
    }
});
