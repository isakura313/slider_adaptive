let slider = $('.slider');
let sliderLenta = slider.find('.slider-lenta');
let sliderItems = slider.find('.slider-lenta-item.real');
sliderLenta.css('width', (sliderItems.length + 2) * 100 +"%");
let sliderBullets = slider.find('.slider-bullets button');

let nowShowIndex = 0;

slider.find('.slider-arrow-left').click(function(){
    if(sliderLenta.hasClass('animated')){
        return;
    }
    sliderLenta.addClass('animated');
    if(nowShowIndex <= 0){
        nowShowIndex = nowShowIndex - 1;
        
        sliderLenta.animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 500, function(){
            nowShowIndex = sliderItems.length - 1;
            sliderLenta.css('left', -100 * (nowShowIndex + 1) +"%");
            sliderLenta.removeClass('animated');
        })
    }
})
