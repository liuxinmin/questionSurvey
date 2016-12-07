require(['../scss/illness.scss','./main.js']);

$('.choose span').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');

    if($(this).index() ==1){
        $('.items').show();
    }else{
        $('.items').hide();
    }
})


$('.items span').on('click',function(){
    $(this).toggleClass('active');
})


$('.baseinfo-btn').on('click',function(){
    location.href = 'allergy.html';
})
