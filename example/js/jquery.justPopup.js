/*
 jQuery justPopup v1.0.0 - 2013-04-15
 (c) 2013 Yang Zhao - geniuscarrier.com
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    $.fn.justPopup = function() {
        return this.each(function() {
            var $this = $(this);
            $this.click(function() {
                $(".overlay").css("visibility") == "visible" ? $(".overlay").css("visibility", "hidden") : $(".overlay").css("visibility", "visible");
                $(".close, .transparency").click(function() {
                    $(".overlay").css("visibility", "hidden");
                });
            });
        });
    };
})(jQuery);
