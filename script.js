$(document).ready(function(){
    $(window).on('scroll load',function(){
        if($(window).scrollTop()>60){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }
        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top -200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#"${id}]`).addClass('active');
            }
        })
    })
})