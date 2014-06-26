(function() {
  var $, templates;

  templates = {
    apu: "<div class=\"head\">\n    <div class=\"hair hair1\"></div>\n    <div class=\"hair hair2\"></div>\n    <div class=\"body head-main1\"></div>\n    <div class=\"circle body ear\">\n        <div class=\"no-border circle inner1\"></div>\n        <div class=\"no-border circle inner2\"></div>\n    </div>\n    <div class=\"no-border body neck1\"></div>\n    <div class=\"hair sideburn\">\n        <div class=\"no-border hair clip\"></div>\n    </div>\n    <div class=\"circle body eyebrow\"></div>\n    <div class=\"circle body eyebag1\"></div>\n    <div class=\"circle left-eye eye\">\n        <div class=\"no-border circle pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"circle right-eye eye\">\n        <div class=\"no-border circle pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"circle body mouth2\"></div>\n    <div class=\"body tooth tooth1\"></div>\n    <div class=\"body tooth tooth2\"></div>\n    <div class=\"body tooth tooth3\"></div>\n    <div class=\"body tooth tooth4\"></div>\n    <div class=\"circle body mouth1\"></div>\n    <div class=\"no-border circle eyebag2\"></div>\n    <div class=\"no-border circle body mouth3\"></div>\n    <div class=\"no-border body neck2\"></div>\n    <div class=\"body nose-tip\"></div>\n    <div class=\"no-border body nose\"></div>\n    <div class=\"no-border moustache moustache-left\"></div>\n    <div class=\"no-border moustache moustache-right\"></div>\n</div>",
    bart: "<div class=\"head\">\n    <div class=\"no-border body hair hair1\"></div>\n    <div class=\"no-border body hair hair2\"></div>\n    <div class=\"no-border body hair hair3\"></div>\n    <div class=\"no-border body hair hair4\"></div>\n    <div class=\"no-border body hair hair5\"></div>\n    <div class=\"no-border body hair hair6\"></div>\n    <div class=\"no-border body hair hair7\"></div>\n    <div class=\"no-border body hair hair8\"></div>\n    <div class=\"no-border body hair hair9\"></div>\n    <div class=\"body mouth-lip2\"></div>\n    <div class=\"no-border body head-left1\"></div>\n    <div class=\"no-border body head-left2\"></div>\n    <div class=\"no-border body head-left3\"></div>\n    <div class=\"no-border body head-left4\"></div>\n    <div class=\"no-border body head-left5\"></div>\n    <div class=\"no-border body head-left6\"></div>\n    <div class=\"no-border body head-left7\"></div>\n    <div class=\"body eyelid\"></div>\n    <div class=\"no-border body mouth\"></div>\n    <div class=\"body mouth-lip\"></div>\n    <div class=\"no-border body head-right2\"></div>\n    <div class=\"no-border body head-right1\"></div>\n    <div class=\"no-border body head-right3\"></div>\n    <!-- The ear -->\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <!-- The right eye -->\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <!-- The nose -->\n    <div class=\"no-border body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <!-- The left eye -->\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"no-border mouth-smile\"></div>\n</div>",
    comicbookguy: "<div class=\"head\">\n    <div class=\"hair hair1\"></div>\n    <div class=\"body head1\"></div>\n    <div class=\"body head2\"></div>\n    <div class=\"no-border body head3\"></div>\n    <div class=\"body head4\"></div>\n    <div class=\"body head5\"></div>\n    <div class=\"no-border body head6\"></div>\n    <div class=\"no-border body head7\"></div>\n    <div class=\"hair hair2\"></div>\n    <div class=\"hair hair3\"></div>\n    <div class=\"hair hair4\"></div>\n    <div class=\"body ear\">\n        <div class=\"inner inner1\"></div>\n        <div class=\"inner inner2\"></div>\n    </div>\n    <div class=\"body left-eye-bag\"></div>\n    <div class=\"left-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"left-eye-top\"></div>\n    <div class=\"body right-eye-bag\"></div>\n    <div class=\"right-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"right-eye-top\"></div>\n    <div class=\"body nose\"></div>\n    <div class=\"nose-left\"></div>\n    <div class=\"mouth1\"></div>\n    <div class=\"mouth2\"></div>\n    <div class=\"body mouth3\"></div>\n    <div class=\"mouth4\"></div>\n    <div class=\"no-border body mouth5\"></div>\n    <div class=\"no-border beard beard1\"></div>\n    <div class=\"no-border beard beard2\"></div>\n    <div class=\"no-border beard beard3\"></div>\n    <div class=\"no-border beard beard4\"></div>\n    <div class=\"no-border beard beard5\"></div>\n    <div class=\"no-border beard beard6\"></div>\n    <div class=\"no-border beard beard7\"></div>\n    <div class=\"no-border beard beard8\"></div>\n    <div class=\"no-border beard beard9\"></div>\n    <div class=\"no-border beard beard10\"></div>\n    <div class=\"no-border beard beard11\"></div>\n    <div class=\"no-border beard beard12\"></div>\n    <div class=\"no-border beard beard13\"></div>\n    <div class=\"no-border beard beard14\"></div>\n    <div class=\"no-border beard beard15\"></div>\n    <div class=\"no-border beard beard16\"></div>\n    <div class=\"no-border beard beard17\"></div>\n    <div class=\"no-border beard beard18\"></div>\n    <div class=\"no-border beard beard19\"></div>\n    <div class=\"no-border beard beard20\"></div>\n    <div class=\"no-border beard beard21\"></div>\n</div>",
    homer: "<div class=\"head\">\n    <!-- Hair and top of head -->\n    <div class=\"hair1\"></div>\n    <div class=\"hair2\"></div>\n    <div class=\"body head-top\"></div>\n    <div class=\"no-border body head-main\"></div>\n    <!-- The 'M' above the ear -->\n    <div class=\"no-border m1\"></div>\n    <div class=\"no-border m2\"></div>\n    <div class=\"no-border m3\"></div>\n    <div class=\"no-border m4\"></div>\n    <!-- The neck parts -->\n    <div class=\"no-border neck1\"></div>\n    <div class=\"body neck2\"></div>\n    <!-- The ear -->\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <!-- The mouth -->\n    <div class=\"mouth\">\n        <div class=\"mouth5\"></div>\n        <div class=\"mouth2\"></div>\n        <div class=\"mouth1\"></div>\n        <div class=\"mouth7\"></div>\n        <div class=\"no-border mouth3\"></div>\n        <div class=\"no-border mouth4\"></div>\n        <div class=\"no-border mouth6\"></div>\n        <div class=\"no-border mouth8\"></div>\n    </div>\n    <!-- The right eye -->\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <!-- The nose -->\n    <div class=\"body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <!-- The left eye -->\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n</div>",
    itchy: "<div class=\"head\">\n    <div class=\"body ear ear-right\"></div>\n    <div class=\"body ear ear-left\"></div>\n    <div class=\"no-border body body-main\"></div>\n    <div class=\"no-border body body-main3\"></div>\n    <div class=\"body body-main2\"></div>\n    <div class=\"no-border body mouth11\"></div>\n    <div class=\"no-border mouth-inner\"></div>\n    <div class=\"body hair hair1\"></div>\n    <div class=\"body hair hair2\"></div>\n    <div class=\"body hair hair3\"></div>\n    <div class=\"body hair hair4\"></div>\n    <div class=\"body hair hair5\"></div>\n    <div class=\"body hair hair6\"></div>\n    <div class=\"body hair hair7\"></div>\n    <div class=\"tooth tooth1\"></div>\n    <div class=\"tooth tooth2\"></div>\n    <div class=\"mouth8\"></div>\n    <div class=\"body mouth1\"></div>\n    <div class=\"body mouth2\"></div>\n    <div class=\"body mouth3\"></div>\n    <div class=\"mouth4\"></div>\n    <div class=\"mouth5\"></div>\n    <div class=\"no-border body mouth6\"></div>\n    <div class=\"mouth7\"></div>\n    <div class=\"body mouth9\"></div>\n    <div class=\"mouth10\"></div>\n    <div class=\"left-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"right-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"nose\"></div>\n    <div class=\"spike1\"></div>\n    <div class=\"spike2\"></div>\n</div>",
    krusty: "<div class=\"head\">\n    <div class=\"body ear left-ear\"></div>\n    <div class=\"body head-top\"></div>\n    <div class=\"hair hair1\"></div>\n    <div class=\"hair hair2\"></div>\n    <div class=\"hair hair3\"></div>\n    <div class=\"hair hair4\"></div>\n    <div class=\"hair hair5\"></div>\n    <div class=\"hair hair6\"></div>\n    <div class=\"hair hair7\"></div>\n    <div class=\"hair hair8\"></div>\n    <div class=\"hair hair9\"></div>\n    <div class=\"hair hair10\"></div>\n    <div class=\"hair hair11\"></div>\n    <div class=\"hair hair12\"></div>\n    <div class=\"hair hair13\"></div>\n    <div class=\"hair hair41\"></div>\n    <div class=\"hair hair42\"></div>\n    <div class=\"hair hair43\"></div>\n    <div class=\"hair hair44\"></div>\n    <div class=\"hair hair14\"></div>\n    <div class=\"hair hair15\"></div>\n    <div class=\"hair hair16\"></div>\n    <div class=\"hair hair17\"></div>\n    <div class=\"hair hair18\"></div>\n    <div class=\"hair hair19\"></div>\n    <div class=\"hair hair20\"></div>\n    <div class=\"hair hair21\"></div>\n    <div class=\"hair hair22\"></div>\n    <div class=\"hair hair23\"></div>\n    <div class=\"hair hair24\"></div>\n    <div class=\"hair hair25\"></div>\n    <div class=\"hair hair36\"></div>\n    <div class=\"hair hair37\"></div>\n    <div class=\"hair hair38\"></div>\n    <div class=\"hair hair39\"></div>\n    <div class=\"hair hair40\"></div>\n    <div class=\"body ear right-ear\">\n        <div class=\"inner\"></div>\n    </div>\n    <div class=\"hair hair26\"></div>\n    <div class=\"hair hair27\"></div>\n    <div class=\"hair hair28\"></div>\n    <div class=\"hair hair29\"></div>\n    <div class=\"hair hair30\"></div>\n    <div class=\"hair hair31\"></div>\n    <div class=\"hair hair32\"></div>\n    <div class=\"hair hair33\"></div>\n    <div class=\"hair hair34\"></div>\n    <div class=\"hair hair35\"></div>\n    <div class=\"mouth mouth-bottom\"></div>\n    <div class=\"no-border mouth mouth-left\"></div>\n    <div class=\"no-border mouth mouth-right\"></div>\n    <div class=\"no-border mouth mouth-right2\"></div>\n    <div class=\"no-border mouth-inner mouth-inner-bottom\"></div>\n    <div class=\"no-border mouth-inner mouth-inner-top\"></div>\n    <div class=\"no-border tongue tongue1\"></div>\n    <div class=\"no-border tongue tongue2\"></div>\n    <div class=\"no-border tongue tongue3\"></div>\n    <div class=\"cheek cheek-left\"></div>\n    <div class=\"cheek cheek-right\"></div>\n    <div class=\"tooth tooth1\"></div>\n    <div class=\"tooth tooth2\"></div>\n    <div class=\"tooth tooth3\"></div>\n    <div class=\"tooth tooth4\"></div>\n    <div class=\"tooth tooth5\"></div>\n    <div class=\"mouth mouth-top2\"></div>\n    <div class=\"no-border cheek cheek-right-inner\"></div>\n    <div class=\"cheek cheek-line\"></div>\n    <div class=\"no-border cheek cheek-left-inner\"></div>\n    <div class=\"left-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"mouth mouth-top1\"></div>\n    <div class=\"body eye-bag\"></div>\n    <div class=\"right-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"eyebrow\"></div>\n    <div class=\"nose\"></div>\n</div>",
    lisa: "<div class=\"head\">\n    <div class=\"no-border body head-main\"></div>\n    <div class=\"no-border body head-main2\"></div>\n    <div class=\"no-border body head-main3\"></div>\n    <div class=\"no-border hair9\"></div>\n    <div class=\"no-border hair10\"></div>\n    <div class=\"body hair hair1\"></div>\n    <div class=\"body hair hair2\"></div>\n    <div class=\"body hair hair3\"></div>\n    <div class=\"body hair hair4\"></div>\n    <div class=\"body hair hair5\"></div>\n    <div class=\"body hair hair6\"></div>\n    <div class=\"body hair hair7\"></div>\n    <div class=\"body hair hair8\"></div>\n    <div class=\"body mouth-lip2\"></div>\n    <div class=\"body mouth-lip\"></div>\n    <div class=\"no-border body neck\"></div>\n    <div class=\"no-border body mouth\"></div>\n    <div class=\"no-border body neck2\"></div>\n    <div class=\"no-border body neck3\"></div>\n    <div class=\"no-border mouth-smile\"></div>\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <div class=\"no-border eyelash1 eyelash\"></div>\n    <div class=\"no-border eyelash2 eyelash\"></div>\n    <div class=\"no-border eyelash3 eyelash\"></div>\n    <div class=\"no-border eyelash4 eyelash\"></div>\n    <div class=\"no-border eyelash5 eyelash\"></div>\n    <div class=\"no-border eyelash6 eyelash\"></div>\n    <div class=\"no-border eyelash7 eyelash\"></div>\n    <div class=\"no-border eyelash8 eyelash\"></div>\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"no-border body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"necklace necklace1\"></div>\n    <div class=\"necklace necklace2\"></div>\n    <div class=\"necklace necklace3\"></div>\n    <div class=\"necklace necklace5\"></div>\n    <div class=\"necklace necklace4\"></div>\n</div>",
    maggie: "<div class=\"head\">\n    <div class=\"no-border body head-main\"></div>\n    <div class=\"body hair hair2\"></div>\n    <div class=\"body hair hair1\"></div>\n    <div class=\"body hair hair3\"></div>\n    <div class=\"body hair hair4\"></div>\n    <div class=\"body hair hair5\"></div>\n    <div class=\"body hair hair6\"></div>\n    <div class=\"body hair hair7\"></div>\n    <div class=\"body hair hair8\"></div>\n    <div class=\"bow bow1\"></div>\n    <div class=\"circle bow bow2\"></div>\n    <div class=\"bow bow3\"></div>\n    <div class=\"no-border body neck\"></div>\n    <div class=\"circle body ear\">\n        <div class=\"no-border circle inner1\"></div>\n        <div class=\"no-border circle inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <div class=\"circle body cheek\"></div>\n    <div class=\"no-border eyelash1 eyelash\"></div>\n    <div class=\"no-border eyelash2 eyelash\"></div>\n    <div class=\"no-border eyelash3 eyelash\"></div>\n    <div class=\"no-border eyelash4 eyelash\"></div>\n    <div class=\"no-border eyelash5 eyelash\"></div>\n    <div class=\"no-border eyelash6 eyelash\"></div>\n    <div class=\"no-border eyelash7 eyelash\"></div>\n    <div class=\"no-border eyelash8 eyelash\"></div>\n    <div class=\"circle eye right-eye\">\n        <div class=\"no-border circle pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"body nose-tip\"></div>\n    <div class=\"circle eye left-eye\">\n        <div class=\"no-border circle pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"circle body mouth\"></div>\n    <div class=\"circle dummy dummy1\"></div>\n    <div class=\"dummy dummy2\">\n        <div class=\"dummy dummy3\"></div>\n    </div>\n</div>",
    marge: "<div class=\"head\">\n    <div class=\"no-border body head-main\"></div>\n    <div class=\"body mouth-lip2\"></div>\n    <div class=\"body mouth-lip\"></div>\n    <div class=\"no-border body neck\"></div>\n    <div class=\"no-border body mouth\"></div>\n    <div class=\"no-border body neck2\"></div>\n    <div class=\"no-border body neck3\"></div>\n    <div class=\"no-border mouth-smile\"></div>\n    <div class=\"hair hair1 hair-circle\"></div>\n    <div class=\"hair hair2 hair-circle\"></div>\n    <div class=\"hair hair3 hair-circle\"></div>\n    <div class=\"hair hair4 hair-circle\"></div>\n    <div class=\"hair hair5 hair-circle\"></div>\n    <div class=\"hair hair6 hair-circle\"></div>\n    <div class=\"hair hair7 hair-circle\"></div>\n    <div class=\"hair hair8 hair-circle\"></div>\n    <div class=\"hair hair9 hair-circle\"></div>\n    <div class=\"hair hair10 hair-circle\"></div>\n    <div class=\"hair hair11 hair-circle\"></div>\n    <div class=\"hair hair12 hair-circle\"></div>\n    <div class=\"hair hair13 hair-circle\"></div>\n    <div class=\"hair hair14 hair-circle\"></div>\n    <div class=\"hair hair15 hair-circle\"></div>\n    <div class=\"hair hair16 hair-circle\"></div>\n    <div class=\"hair hair17 hair-circle\"></div>\n    <div class=\"hair hair18 hair-circle\"></div>\n    <div class=\"hair hair19 hair-circle\"></div>\n    <div class=\"hair hair20 hair-circle\"></div>\n    <div class=\"hair hair21 hair-circle\"></div>\n    <div class=\"hair hair22 hair-circle\"></div>\n    <div class=\"hair hair23 hair-circle\"></div>\n    <div class=\"hair hair24 hair-circle\"></div>\n    <div class=\"hair hair25 hair-circle\"></div>\n    <div class=\"hair hair26 hair-circle\"></div>\n    <div class=\"hair hair27 hair-circle\"></div>\n    <div class=\"hair hair28 hair-circle\"></div>\n    <div class=\"hair hair29 hair-circle\"></div>\n    <div class=\"hair hair30 hair-circle\"></div>\n    <div class=\"no-border hair hair-main\"></div>\n    <div class=\"no-border hair hair-main2\"></div>\n    <div class=\"no-border hair hair-main3\"></div>\n    <div class=\"no-border hair hair-main4\"></div>\n    <div class=\"no-border hair hair-main5\"></div>\n    <div class=\"no-border hair hair-main6\"></div>\n    <div class=\"no-border hair hair-main7 hair-circle\"></div>\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <div class=\"no-border eyelash1 eyelash\"></div>\n    <div class=\"no-border eyelash2 eyelash\"></div>\n    <div class=\"no-border eyelash3 eyelash\"></div>\n    <div class=\"no-border eyelash4 eyelash\"></div>\n    <div class=\"no-border eyelash5 eyelash\"></div>\n    <div class=\"no-border eyelash6 eyelash\"></div>\n    <div class=\"no-border eyelash7 eyelash\"></div>\n    <div class=\"no-border eyelash8 eyelash\"></div>\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"no-border body nose\"></div>\n    <div class=\"body nose-tip\"></div>\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n</div>",
    "mr-burns": "<div class=\"head\">\n    <div class=\"hair\">\n        <div class=\"hair-line hair-line1\"></div>\n        <div class=\"hair-line hair-line2\"></div>\n        <div class=\"hair-line hair-line3\"></div>\n        <div class=\"hair-line hair-line4\"></div>\n    </div>\n    <div class=\"ear\">\n        <div class=\"inner1\"></div>\n        <div class=\"inner2\"></div>\n    </div>\n    <div class=\"no-border head-main2\"></div>\n    <div class=\"eye-bulge\"></div>\n    <div class=\"eye left-eye\">\n        <div class=\"no-border pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"eye right-eye\">\n        <div class=\"no-border pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"sideburn\"></div>\n    <div class=\"head-main\"></div>\n    <div class=\"no-border head-main3\"></div>\n    <div class=\"liverspot1 liverspot\"></div>\n    <div class=\"liverspot2 liverspot\"></div>\n    <div class=\"liverspot3 liverspot\"></div>\n    <div class=\"nose-bottom\"></div>\n    <div class=\"nose-top1\"></div>\n    <div class=\"nose-top2\"></div>\n    <div class=\"nose-tip\"></div>\n    <div class=\"no-border nose-inner\"></div>\n    <div class=\"eyebrow eyebrow1\"></div>\n    <div class=\"eyebrow eyebrow2\"></div>\n    <div class=\"eyebrow eyebrow3\"></div>\n    <div class=\"neck2\"></div>\n    <div class=\"neck1\"></div>\n    <div class=\"neck3\"></div>\n    <div class=\"neck4\"></div>\n    <div class=\"no-border bottom-lip\"></div>\n    <div class=\"tooth tooth1\"></div>\n    <div class=\"tooth tooth2\"></div>\n    <div class=\"tooth tooth3\"></div>\n    <div class=\"tooth tooth4\"></div>\n    <div class=\"tooth tooth5\"></div>\n    <div class=\"tooth tooth6\"></div>\n    <div class=\"no-border tooth tooth7\"></div>\n    <div class=\"no-border teeth\"></div>\n    <div class=\"top-lip\"></div>\n    <div class=\"no-border top-lip2\"></div>\n    <div class=\"cheek\"></div>\n    <div class=\"nose-curl\"></div>\n</div>",
    "ned-flanders": "<div class=\"head\">\n    <div class=\"hair-top hair\"></div>\n    <div class=\"hair-side hair\"></div>\n    <div class=\"no-border neck-bottom\"></div>\n    <div class=\"no-border neck-left\"></div>\n    <div class=\"body lip\"></div>\n    <div class=\"no-border body head-main\"></div>\n    <div class=\"no-border hair-line1 hair-line\"></div>\n    <div class=\"no-border hair-line2 hair-line\"></div>\n    <div class=\"no-border hair-line3 hair-line\"></div>\n    <div class=\"no-border hair-line4 hair-line\"></div>\n    <div class=\"no-border hair-line5 hair-line\"></div>\n    <div class=\"body head-top\"></div>\n    <div class=\"no-border body eye-bulge\"></div>\n    <div class=\"no-border body head-top-inner\"></div>\n    <div class=\"no-border neck-right\"></div>\n    <div class=\"body ear\">\n        <div class=\"no-border inner\"></div>\n    </div>\n    <div class=\"no-border sideburn hair\"></div>\n    <div class=\"no-border body head-side\"></div>\n    <div class=\"left-eye eye\">\n        <div class=\"no-border pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"right-eye eye\">\n        <div class=\"no-border pupil\"></div>\n        <div class=\"no-border body eyelid-top\"></div>\n        <div class=\"no-border body eyelid-bottom\"></div>\n    </div>\n    <div class=\"no-border glasses\"></div>\n    <div class=\"no-border mouth-top\"></div>\n    <div class=\"no-border mouth-left\"></div>\n    <div class=\"no-border mouth-right\"></div>\n    <div class=\"no-border mouth-bottom\"></div>\n    <div class=\"no-border mouth-inner\"></div>\n    <div class=\"no-border tongue\"></div>\n    <div class=\"moustache\">\n        <div class=\"no-border moustache-hair1 hair left\"></div>\n        <div class=\"no-border moustache-hair2 hair left\"></div>\n        <div class=\"no-border moustache-hair3 hair left\"></div>\n        <div class=\"no-border moustache-hair4 hair right\"></div>\n        <div class=\"no-border moustache-hair5 hair right\"></div>\n        <div class=\"no-border moustache-hair6 hair right\"></div>\n    </div>\n    <div class=\"body nose\"></div>\n</div>",
    "ralph-wiggum": "<div class=\"head\">\n    <div class=\"body head1\"></div>\n    <div class=\"no-border body head2\"></div>\n    <div class=\"hair hair-left hair1\"></div>\n    <div class=\"hair hair-left hair2\"></div>\n    <div class=\"hair hair-left hair3\"></div>\n    <div class=\"hair hair-left hair4\"></div>\n    <div class=\"hair hair-left hair5\"></div>\n    <div class=\"hair hair-left hair6\"></div>\n    <div class=\"hair hair-left hair7\"></div>\n    <div class=\"hair hair-right hair8\"></div>\n    <div class=\"hair hair-right hair9\"></div>\n    <div class=\"hair hair-right hair10\"></div>\n    <div class=\"hair hair-right hair11\"></div>\n    <div class=\"hair hair-right hair12\"></div>\n    <div class=\"body ear\">\n        <div class=\"inner1\"></div>\n        <div class=\"inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <div class=\"no-border body mouth5\"></div>\n    <div class=\"body mouth1\"></div>\n    <div class=\"no-border body mouth2\"></div>\n    <div class=\"no-border body mouth3\"></div>\n    <div class=\"no-border body mouth4\"></div>\n    <div class=\"left-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"right-eye eye\">\n        <div class=\"no-border pupil\"></div>\n    </div>\n    <div class=\"body nose\"></div>\n</div>",
    smithers: "<div class=\"head\">\n    <div class=\"hair hair4\"></div>\n    <div class=\"hair hair5\"></div>\n    <div class=\"hair hair6\"></div>\n    <div class=\"hair hair7\"></div>\n    <div class=\"hair hair8\"></div>\n    <div class=\"hair hair9\"></div>\n    <div class=\"hair hair10\"></div>\n    <div class=\"hair hair11\"></div>\n    <div class=\"hair hair12\"></div>\n    <div class=\"hair hair13\"></div>\n    <div class=\"hair hair14\"></div>\n    <div class=\"hair hair15\"></div>\n    <div class=\"body head3\"></div>\n    <div class=\"no-border hair hair16\"></div>\n    <div class=\"body head1\"></div>\n    <div class=\"no-border body head2\"></div>\n    <div class=\"head4\"></div>\n    <div class=\"hair hair1\"></div>\n    <div class=\"hair hair2\"></div>\n    <div class=\"no-border hair hair3\"></div>\n    <div class=\"no-border body head7\"></div>\n    <div class=\"body mouth-lip2\"></div>\n    <div class=\"no-border body mouth\"></div>\n    <div class=\"body mouth-lip\"></div>\n    <div class=\"no-border body head5\"></div>\n    <div class=\"head6\"></div>\n    <div class=\"body ear\">\n        <div class=\"no-border inner1\"></div>\n        <div class=\"no-border inner2\"></div>\n        <div class=\"no-border body clip\"></div>\n    </div>\n    <div class=\"eyebrow eyebrow-left\"></div>\n    <div class=\"eyebrow eyebrow-right\"></div>\n    <div class=\"glasses-bridge\"></div>\n    <div class=\"no-border glasses-arm\"></div>\n    <div class=\"right-eye\">\n        <div class=\"no-border right-eye-pupil\"></div>\n    </div>\n    <div class=\"body nose-tip\"></div>\n    <div class=\"left-eye\">\n        <div class=\"no-border left-eye-pupil\"></div>\n    </div>\n    <div class=\"no-border mouth-smile\"></div>\n</div>"
  };

  $ = window.jQuery;

  if (!$) {
    return;
  }

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

  $.fn.simpsons.characters = ['apu', 'bart', 'comicbookguy', 'homer', 'itchy', 'krusty', 'lisa', 'maggie', 'marge', 'mr-burns', 'ned-flanders', 'ralph-wiggum', 'smithers'];

}).call(this);