$(function(){
    $("aside .colorGroup").click(function(){
        $("aside .colorGroup ul li").toggleClass("display");
    })
})

$(function(){
    $("aside .colorGroup ul li").click(function(){
        if($(this).hasClass("gold")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_gold/colorStyleGold.css");
        } else if($(this).hasClass("claret")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_claret/colorStyleClaret.css");
        } else if($(this).hasClass("gray")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_gray/colorStyleGray.css");
        } else if($(this).hasClass("green")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_green/colorStyleGreen.css");
        } else if($(this).hasClass("pink")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_pink/colorStylePink.css");
        } else if($(this).hasClass("red")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_red/colorStyleRed.css");
        } else if($(this).hasClass("blue")){
            $(".colorSystem")
            .attr("href","./css_colorStyle/colorStyle.css");
        } 
    })
})
