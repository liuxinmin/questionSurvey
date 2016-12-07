require(['../scss/howFeel.scss','./main.js']);

$('.box dl dd').on('click','span',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.tijiao').on('click',function(){
    location.href = 'status.html';
})
