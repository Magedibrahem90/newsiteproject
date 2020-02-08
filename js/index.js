/* changeColor  */
$("#options i").click(function(){
    $("#colors-options").toggle();
})
let lis = $("#colors-options ul li ");
let hs = $("h1,h2,h3,h4,h5,h6");
lis.eq(0).css("backgroundColor","yellow")
lis.eq(1).css("backgroundColor","green")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","nevy")
lis.eq(4).css("backgroundColor","blue");


lis.click(function(){
    let color = $(this).css("backgroundColor");
    hs.css("color",color);
})

/* changeImg  */

$("#options img").click(function(){
    let imgSrc = $(this).attr("src");
    $(".header-img").css("backgroundImage",`url(${imgSrc})`);
})


/* scroll  */
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop>800)
    {
        $("#btnup").fadeIn(500);
    }
    else
    {
        $("#btnup").fadeOut(500);
    }
})


$("#btnup").click(function(){
    $("body,html").animate({scrollTop:0},1000);
})

$("nav a").click(function(){
    let ahref = $(this).attr("href");
    let ProfileOffset = $(ahref).offset().top;
    $("body,html").animate({scrollTop:ProfileOffset},1000);

})
