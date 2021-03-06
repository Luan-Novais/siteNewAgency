$(document).ready(function(){
    $('#nav-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active')
    });
});

//Carousel principal

$('#carousel_principal').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:0,
    nav: true,
    navSpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots: true,
    dotsSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsiveRefreshRate: 5
});

$('#carousel-testemunhas').owlCarousel({
    items:2,
    loop:true,
    margin:40,
    nav: false,
    navSpeed: 1000,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    dots: true,
    dotsSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsiveRefreshRate: 10,
    responsive:{
        0:{
            items: 1
        },
        960:{
            items:2
        },
        1280:{
            nav: true,
        }
    }
});

