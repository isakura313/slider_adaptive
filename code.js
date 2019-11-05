//нам нужно сделать плавную анимацию самих булетсов
//сделать так, что бы при загрузке отображался первый кружочек
//сделать общий рефакторинг кода


let slider = $('.slider');  //получение общего слайдера
let sliderLenta = slider.find('.slider-lenta'); // общая лента
let sliderItems = slider.find('.slider-lenta-item.real'); // получаем настоящие элементы
sliderLenta.css('width', (sliderItems.length+2) * 100 +"%"); // отрисовка всей ширины
let sliderBullets = slider.find('.slider-bullets div'); // здесь у нас буллетсы


let nowShowIndex = 0; // наш изначальный индекс
//где-то здесь в общей прострнастве попробуем наполнить наши точки
for (let i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].style.backgroundColor = "white";
}

sliderBullets[nowShowIndex].style.backgroundColor = "blue";

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
            for (let i = 0; i < sliderBullets.length; i++) {
                sliderBullets[i].style.backgroundColor = "white";
            }
        
            sliderBullets[nowShowIndex].style.backgroundColor = "blue";
        });
     } else{
            nowShowIndex = nowShowIndex - 1;
            sliderLenta.animate({
                left: -100 * (nowShowIndex + 1) + "%"
            }, 600, function(){
                sliderLenta.removeClass('animated');
            })
        }
        for (let i = 0; i < sliderBullets.length; i++) {
            sliderBullets[i].style.backgroundColor = "white";
        }
    
        sliderBullets[nowShowIndex].style.backgroundColor = "blue";
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
        for (let i = 0; i < sliderBullets.length; i++) {
            sliderBullets[i].style.backgroundColor = "white";
        }
        sliderBullets[nowShowIndex].style.backgroundColor = "blue";
        });
        if(sliderLenta.hasClass('animated')){
            return;
        }

     } else{
            nowShowIndex = nowShowIndex + 1;
            sliderLenta.animate({
                left: -100 * (nowShowIndex + 1) + "%"
            }, 600, function(){
                sliderLenta.removeClass('animated');
            for (let i = 0; i < sliderBullets.length; i++) {
                sliderBullets[i].style.backgroundColor = "white";
            }
            sliderBullets[nowShowIndex].style.backgroundColor = "blue";
            })
            if(sliderLenta.hasClass('animated')){
                return;
            }
        }
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



// setInterval(() => {
//     slider.find('.slider-arrow-right').click()
// }, 2000);






