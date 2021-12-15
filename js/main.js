$(document).ready(function(){

    //sticky menu
    $('.js--service-section').waypoint(function(direction){
        if(direction=='down'){
            $('nav').addClass('sticky');

        }
        else{
            $('nav').removeClass('sticky');
        }
    })

    //mixitup
    mixitup('.content');

    //ACTIVE LINK

    $('.main-nav li a').click(function(){
        $('.main-nav li a').removeClass("active-btn");
        $(this).addClass("active-btn");
    })
    $('nav a img.logo').click(function(){
        $('nav ul li a').removeClass('active-btn');
        $('nav ul li:first-child a').addClass('active-btn');
    });

    //SMOOTH SCROLL FOR IE/EDGE/SAFARI

    $('a').on('click',function(e){
        if(this.hash!==''){
            e.preventDefault();
            const hash=this.hash;
            $('html,body').animate({scorllTop:$(hash).offset().top},700,
            function(){
                window.location.hash=hash;
            })
        }
    })
});

function openNav(){
    document.getElementById('mynav').style.width='100%';
}
function closeNav(){
    document.getElementById('mynav').style.width='0%';
}