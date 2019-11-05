//нам нужно сделать плавную анимацию самих булетсов
//сделать так, что бы при загрузке отображался первый кружочек
//сделать общий рефакторинг кода


let slider = $('.slider');  //получение общего слайдера
let sliderLenta = slider.find('.slider-lenta'); // общая лента
let sliderItems = slider.find('.slider-lenta-item.real'); // получаем настоящие элементы
sliderLenta.css('width', (sliderItems.length+2) * 100 +"%"); // отрисовка всей ширины
let sliderBullets = slider.find('.slider-bullets div'); // здесь у нас буллетсы

//название функции на английском и описывает некое действие



let nowShowIndex = 0; // наш изначальный индекс
//где-то здесь в общей прострнастве попробуем наполнить наши точки
bullets_draw(nowShowIndex);

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
            bullets_draw(nowShowIndex);
        });
     } else{
            nowShowIndex = nowShowIndex - 1;
            sliderLenta.animate({
                left: -100 * (nowShowIndex + 1) + "%"
            }, 600, function(){
                sliderLenta.removeClass('animated');
            })
        }
        bullets_draw(nowShowIndex);
});


slider.find('.slider-arrow-right').click(function(){

    sliderLenta.addClass('animated');
    if(nowShowIndex >= sliderItems.length - 1){
        nowShowIndex = nowShowIndex + 1;
        
        sliderLenta.animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 600, function(){
            nowShowIndex = 0;
            sliderLenta.css('left', -100 * (nowShowIndex + 1) +"%");
            sliderLenta.removeClass('animated');
        bullets_draw(nowShowIndex);
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
            bullets_draw(nowShowIndex)
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

    bullets_draw(bullet_index);
    
    sliderLenta.animate({
        left: -100 * (nowShowIndex + 1) + "%"
    }, 600, function(){
        sliderLenta.removeClass('animated');
    })
});



// setInterval(() => {
//     slider.find('.slider-arrow-right').click()
// }, 2000);



function bullets_draw(show_index){
    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = "white";
    }

    sliderBullets[show_index].style.backgroundColor = "blue";
}



