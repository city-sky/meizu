"use strict";!function(){var n=$(".banner"),t=$(".imgList"),e=$(".btnsLeft"),i=$(".btnsRight"),c=$(".cirs li"),o=0,a=!0;function l(){c.removeClass("active"),c.eq(o>=c.length?0:o).addClass("active")}i.click(function(){a&&(a=!1,o++,t.animate({left:-o*n.width()},1e3,function(){o>=c.length&&(o=0,$(this).css("left",0)),a=!0}),l())}),e.click(function(){a&&(a=!1,--o<0&&(o=c.length,t.css("left",-o*n.width()),o--),t.animate({left:-o*n.width()},1e3,function(){a=!0}),l())}),c.click(function(){a&&(a=!1,o=$(this).index(),t.animate({left:-o*n.width()},1e3,function(){a=!0}),l())});var s=setInterval(function(){i.click()},2e3);n.mouseenter(function(){clearInterval(s),e.parent().css("display","block")}),n.mouseleave(function(){e.parent().css("display","none"),s=setInterval(function(){i.click()},2e3)});var f=$(".product_one");console.log(f),$.ajax({url:"../../data/2.json",method:"get",dataType:"json",success:function(n){n.forEach(function(n,t){console.log(n),f.append('\n                    <li class="li_box1">\n                        <a href="">\n                            <img src="'+n.img+'" alt="">\n                            <h2>'+n.good_name+"</h2>\n                            <p>"+n.title+"</p>\n                            <span>"+n.price+"</span>\n                        </a>\n                    </li>\n                    ")})}}),$(".cellphone_one button").click(function(){location.href="./shopping.html"})}();