(function() {
    var $, templates;

    $ = window.jQuery;

    if (!$) {
        return;
    }

    templates = {
        homer: "<div class=\"head\">\n    <!-- Hair and top of head -->\n    <div class=\"hair1\"></div>\n    <div class=\"hair2\"></div>\n    <div class=\"body head-top\"></div>\n    <div class=\"no-border body head-main\"></div>\n    <!-- The 'M' above the ear -->\n    <div class=\"no-border m1\"></div>\n    <div class=\"no-border m2\"></div>\n    <div class=\"no-border m3\"></div>\n    <div class=\"no-border m4\"></div>\n    <!-- The neck parts -->\n    <div class=\"no-border neck1\"></div>\n    <div class=\"body neck2\"></div>\n    <!-- The ear -->\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <!-- The mouth -->\n    <div class=\"mouth\">\n        <div class=\"mouth5\"></div>\n        <div class=\"mouth2\"></div>\n        <div class=\"mouth1\"></div>\n        <div class=\"mouth7\"></div>\n        <div class=\"no-border mouth3\"></div>\n        <div class=\"no-border mouth4\"></div>\n        <div class=\"no-border mouth6\"></div>\n        <div class=\"no-border mouth8\"></div>\n    </div>\n    <!-- The right eye -->\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <!-- The nose -->\n    <div class=\"body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <!-- The left eye -->\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n</div>",
        bart: "<div class=\"head\">\n    <div class=\"no-border body hair hair1\"></div>\n    <div class=\"no-border body hair hair2\"></div>\n    <div class=\"no-border body hair hair3\"></div>\n    <div class=\"no-border body hair hair4\"></div>\n    <div class=\"no-border body hair hair5\"></div>\n    <div class=\"no-border body hair hair6\"></div>\n    <div class=\"no-border body hair hair7\"></div>\n    <div class=\"no-border body hair hair8\"></div>\n    <div class=\"no-border body hair hair9\"></div>\n    <div class=\"body mouth-lip2\"></div>\n    <div class=\"no-border body head-left1\"></div>\n    <div class=\"no-border body head-left2\"></div>\n    <div class=\"no-border body head-left3\"></div>\n    <div class=\"no-border body head-left4\"></div>\n    <div class=\"no-border body head-left5\"></div>\n    <div class=\"no-border body head-left6\"></div>\n    <div class=\"no-border body head-left7\"></div>\n    <div class=\"body eyelid\"></div>\n    <div class=\"no-border body mouth\"></div>\n    <div class=\"body mouth-lip\"></div>\n    <div class=\"no-border body head-right2\"></div>\n    <div class=\"no-border body head-right1\"></div>\n    <div class=\"no-border body head-right3\"></div>\n    <!-- The ear -->\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <!-- The right eye -->\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <!-- The nose -->\n    <div class=\"no-border body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <!-- The left eye -->\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"no-border mouth-smile\"></div>\n</div>"
    };

    $.fn.simpsons = function(character) {
        if (character == null) {
            character = "bart";
        }
        if (templates[character]) {
            this.attr('id', character);
            this.addClass('simpsons');
            this.append($(templates[character]));
        }
        return this;
    };

}).call(this);
