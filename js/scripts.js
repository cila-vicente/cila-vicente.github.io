$(document).ready(function(){
    $("[data-behavior~=\"parallax\"]").each(function() {
        ParallaxElements(this);
    });
});
$(window).scroll(function() {
    $("[data-behavior~=\"parallax\"]").each(function() {
        ParallaxElements(this);
    });
    ParallaxBg();
});
function ParallaxElements(el) {
    var documentTop = $(window).scrollTop() / $(document).height();
    if(null == $(el).data("offset"))
    {
        var top = parseInt($(el).css("top"));
        if(null == top)
        {
            top = 0;
        }
        $(el).data("offset", top);
        $(el).css("{position: absolute; top: " + $(el).data("offset") + "px;}")
    }
    var elOff = $(el).data("offset");
    var elArg = $(el).data("arg");
    var parallaxFactor = elOff + (documentTop * elArg);
    $(el).css("top", parallaxFactor + "px");
    console.log("parallaxFactor:" + parallaxFactor);
}
function ParallaxBg(){
    var posic = (($(window).scrollTop() - $("#Contato").offset().top ) / $("#Contato").offset().top ) * 20 //percentagem da VH ainda em tela
    $("body").css("background-position-y", posic + "vh")
}