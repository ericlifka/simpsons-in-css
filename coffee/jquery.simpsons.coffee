
$ = window.jQuery
if not $ then return

templates =
    Homer: """
        <div class="head">
            <!-- Hair and top of head -->
            <div class="hair1"></div>
            <div class="hair2"></div>
            <div class="body head-top"></div>
            <div class="no-border body head-main"></div>
            <!-- The 'M' above the ear -->
            <div class="no-border m1"></div>
            <div class="no-border m2"></div>
            <div class="no-border m3"></div>
            <div class="no-border m4"></div>
            <!-- The neck parts -->
            <div class="no-border neck1"></div>
            <div class="body neck2"></div>
            <!-- The ear -->
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
            <!-- The mouth -->
            <div class="mouth">
                <div class="mouth5"></div>
                <div class="mouth2"></div>
                <div class="mouth1"></div>
                <div class="mouth7"></div>
                <div class="no-border mouth3"></div>
                <div class="no-border mouth4"></div>
                <div class="no-border mouth6"></div>
                <div class="no-border mouth8"></div>
            </div>
            <!-- The right eye -->
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
                <div class="no-border body eyelid-top"></div>
                <div class="no-border body eyelid-bottom"></div>
            </div>
            <!-- The nose -->
            <div class="body nose"></div>
            <div class="body nose-tip"></div>
            <!-- The left eye -->
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
                <div class="no-border body eyelid-top"></div>
                <div class="no-border body eyelid-bottom"></div>
            </div>
        </div>
        """
    Bart: """
        <div class="head">
            <div class="no-border body hair hair1"></div>
            <div class="no-border body hair hair2"></div>
            <div class="no-border body hair hair3"></div>
            <div class="no-border body hair hair4"></div>
            <div class="no-border body hair hair5"></div>
            <div class="no-border body hair hair6"></div>
            <div class="no-border body hair hair7"></div>
            <div class="no-border body hair hair8"></div>
            <div class="no-border body hair hair9"></div>
            <div class="body mouth-lip2"></div>
            <div class="no-border body head-left1"></div>
            <div class="no-border body head-left2"></div>
            <div class="no-border body head-left3"></div>
            <div class="no-border body head-left4"></div>
            <div class="no-border body head-left5"></div>
            <div class="no-border body head-left6"></div>
            <div class="no-border body head-left7"></div>
            <div class="body eyelid"></div>
            <div class="no-border body mouth"></div>
            <div class="body mouth-lip"></div>
            <div class="no-border body head-right2"></div>
            <div class="no-border body head-right1"></div>
            <div class="no-border body head-right3"></div>
            <!-- The ear -->
            <div class="body ear">
                <div class="no-border inner1"></div>
                <div class="no-border inner2"></div>
                <div class="no-border body clip"></div>
            </div>
            <!-- The right eye -->
            <div class="right-eye">
                <div class="no-border right-eye-pupil"></div>
                <div class="no-border body eyelid-top"></div>
                <div class="no-border body eyelid-bottom"></div>
            </div>
            <!-- The nose -->
            <div class="no-border body nose"></div>
            <div class="body nose-tip"></div>
            <!-- The left eye -->
            <div class="left-eye">
                <div class="no-border left-eye-pupil"></div>
                <div class="no-border body eyelid-top"></div>
                <div class="no-border body eyelid-bottom"></div>
            </div>
            <div class="no-border mouth-smile"></div>
        </div>
        """
characters =
    Homer: (div) ->
    Bart: (div) ->

$.fn.simpsons = (character = "Bart") ->
    characters[character]?(@)
    @
