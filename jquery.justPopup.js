/*
 jQuery justPopup v1.0.0 - 2013-04-15
 (c) 2013 Yang Zhao - geniuscarrier.com
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    $.fn.justPopup = function(options) {
        return this.each(function() {

            var config = {
                "color" : "#FFFFFF",
                "background-color" : "#7EB5D6",
                "width" : "500",
                "height" : "300",
                "overlayClose" : true,
                "overlayOpacity" : 0.6
            };

            if (options) {
                $.extend(config, options);
            }

            var $this = $(this);
            $this.click(function() {
                $(".inner").css({
                    "color" : config["color"],
                    "background-color" : config["background-color"],
                    "width" : config["width"],
                    "height" : config["height"],
                    "margin-left" : -config["width"] / 2,
                    "margin-top" : -config["height"] / 2
                });
                $(".transparency").css("opacity", config["overlayOpacity"]);
                $(".overlay").css("visibility") == "visible" ? $(".overlay").css("visibility", "hidden") : $(".overlay").css("visibility", "visible");
                $(".close").click(function() {
                    $(".overlay").css("visibility", "hidden");
                });
                if (config["overlayClose"]) {
                    $(".transparency").click(function() {
                        $(".overlay").css("visibility", "hidden");
                    });
                }
            });
        });
    };
})(jQuery);
