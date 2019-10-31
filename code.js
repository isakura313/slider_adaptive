let slider = $('.slider');
let sliderLenta = slider.find('.slider-lenta');
let sliderItems = slider.find('.slider-lenta-item.real');
sliderLenta.css('width', (sliderItems.length+2) * 100 +"%");
let sliderBullets = slider.find('.slider-bullets div');


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
        }, 600, function(){
            nowShowIndex = sliderItems.length - 1;
            sliderLenta.css('left', -100 * (nowShowIndex + 1) +"%");
            sliderLenta.removeClass('animated');
        });
        // for (let i = 0; i < sliderBullets.length; i++) {
        //     sliderBullets[i].style.backgroundColor = "white";
        // }
    
        // sliderBullets[nowShowIndex].style.backgroundColor = "blue";
     } else{
            nowShowIndex = nowShowIndex - 1;
            sliderLenta.animate({
                left: -100 * (nowShowIndex + 1) + "%"
            }, 600, function(){
                sliderLenta.removeClass('animated');
            })
        }
        // for (let i = 0; i < sliderBullets.length; i++) {
        //     sliderBullets[i].style.backgroundColor = "white";
        // }
    
        // sliderBullets[nowShowIndex].style.backgroundColor = "blue";
});


slider.find('.slider-arrow-right').click(function(){


    // sliderBullets[nowShowIndex].style.backgroundColor = "blue";

    sliderLenta.addClass('animated');
    if(nowShowIndex >= sliderItems.length - 1){
        nowShowIndex = nowShowIndex + 1;
        
        sliderLenta.animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 600, function(){
            nowShowIndex = 0;
            sliderLenta.css('left', -100 * (nowShowIndex + 1) +"%");
            sliderLenta.removeClass('animated');
        });
        if(sliderLenta.hasClass('animated')){
            return;
        }
        // for (let i = 0; i < sliderBullets.length; i++) {
        //     sliderBullets[i].style.backgroundColor = "white";
        // }
        // sliderBullets[nowShowIndex].style.backgroundColor = "blue";

     } else{
            nowShowIndex = nowShowIndex + 1;
            sliderLenta.animate({
                left: -100 * (nowShowIndex + 1) + "%"
            }, 600, function(){
                sliderLenta.removeClass('animated');
            })
            if(sliderLenta.hasClass('animated')){
                return;
            }


        }
        // for (let i = 0; i < sliderBullets.length; i++) {
        //     sliderBullets[i].style.backgroundColor = "white";
        // }
        // sliderBullets[nowShowIndex].style.backgroundColor = "blue";
});


sliderBullets.click(function(){
    if(sliderLenta.hasClass('animated')){
        return;
    }
    sliderLenta.addClass('animated');
    let bullet_index = sliderBullets.index(   $(this) );

    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = "white";
        
    }
    sliderBullets[bullet_index].style.backgroundColor = "blue";


    nowShowIndex = bullet_index;
    sliderLenta.animate({
        left: -100 * (nowShowIndex + 1) + "%"
    }, 600, function(){
        sliderLenta.removeClass('animated');
    })
});



setInterval(() => {
    slider.find('.slider-arrow-right').click()
}, 2000);






