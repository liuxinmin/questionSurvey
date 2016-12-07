require(['../scss/basicInfo.scss','./main.js']);

$('.not-lick li i').on('click',function(){
    $(this).toggleClass('active');
});

$('.begin-btn').on('click',function(){
    $('.mask').css({'display':'block'});
});

$('.close').on('click',function(){
    $('.mask').css({'display':'none'});
});

$('.test_btn').on('click',function(){
    location.href = 'howFeel.html';
})


