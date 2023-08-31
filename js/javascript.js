$(function(){
    $("aside .colorGroup button").click(function(){
        $("aside .colorGroup ul li").toggleClass("display");
    })
})

$(function(){
    $("aside .colorGroup ul li").click(function(){
        if($(this).hasClass("gold")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_gold/colorStyle.css");
        } else if($(this).hasClass("claret")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_claret/colorStyle.css");
        } else if($(this).hasClass("gray")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_gray/colorStyle.css");
        } else if($(this).hasClass("green")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_green/colorStyle.css");
        } else if($(this).hasClass("pink")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_pink/colorStyle.css");
        } else if($(this).hasClass("red")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_red/colorStyle.css");
        } else if($(this).hasClass("blue")){
            $(".colorSystem")
            .attr("href","./css_colorStyle/colorStyle.css");
        } else if($(this).hasClass("purple-gray")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_purple-gray/colorStyle.css");
        }else if($(this).hasClass("purple-red")){
                $(".colorSystem")
                .attr("href","./css_colorStyle_purple-red/colorStyle.css");
        } else if($(this).hasClass("yellow-blue")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_yellow-blue/colorStyle.css");
        } else if($(this).hasClass("purple-blue")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_purple-blue/colorStyle.css");
        } else if($(this).hasClass("purple")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_purple/colorStyle.css");
        }  else if($(this).hasClass("orange-gray")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_orange-gray/colorStyle.css");
        }  else if($(this).hasClass("orange-blue")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_orange-blue/colorStyle.css");
        }  else if($(this).hasClass("blue-skin")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_blue-skin/colorStyle.css");
        }  else if($(this).hasClass("blue-gold")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_blue-gold/colorStyle.css");
        }   else if($(this).hasClass("orange-gold")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_orange-gold/colorStyle.css");
        }   else if($(this).hasClass("orange-green")){
            $(".colorSystem")
            .attr("href","./css_colorStyle_orange-green/colorStyle.css");
        } 
         
    })
})
