$(".mainp").width($("main .col-md-3 .sidebr img").eq(0).width())
$(".mainp").height($("main .col-md-3 .sidebr img").eq(0).height())
var mgt = -$("main .col-md-3 .sidebr img").eq(0).height()+'px';
(function(){
$("main .col-xs-6").bind("mouseenter",function(){
    console.log($(this).index())
$("main .col-xs-6").eq($(this).index()).find(".mainp").stop().animate({marginTop:mgt},1000,"linear");
})

$("main .col-xs-6").bind("mouseleave",function(){
$(".mainp").eq($(this).index()).stop().css({marginTop:"0"})
})


}())
