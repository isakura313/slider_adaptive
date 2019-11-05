//нам нужно сделать плавную анимацию самих булетсов
//сделать так, что бы при загрузке отображался первый кружочек
//сделать общий рефакторинг кода
//мы удаляем jquery из проекта и переписываем на новый ES6
//починить баг при клике направо


let slider = document.querySelector('.slider'); //получение общего слайдера
let sliderLenta = slider.querySelector('.slider-lenta'); // общая лента
let sliderItems = slider.querySelectorAll('.slider-lenta-item.real'); // получаем настоящие элементы
let sliderBullets = document.querySelectorAll('.slider-bullets div'); // здесь у нас буллетсы
let arr_left = slider.querySelector('.slider-arrow-left');
let arr_right = slider.querySelector('.slider-arrow-right');
sliderLenta.style.width = (sliderItems.length + 2) * 100 + "%"

let nowShowIndex = 0; // наш изначальный индекс
bullets_draw(nowShowIndex); // изначальная отрисовка

arr_left.onclick = function () {
    if (sliderLenta.classList.contains('animated')) {
        return;
    }

    sliderLenta.classList.add('animated');
    if (nowShowIndex <= 0) {
        nowShowIndex = nowShowIndex - 1;

        $(sliderLenta).animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 600, function () {

            nowShowIndex = sliderItems.length - 1;
            sliderLenta.style.left = -100 * (nowShowIndex + 1) + "%";
            sliderLenta.classList.remove('animated');
            bullets_draw(nowShowIndex);
        });
    } else {
        nowShowIndex = nowShowIndex - 1;
        $(sliderLenta).animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 600, function () {
            sliderLenta.classList.remove('animated');
        })
    }
    bullets_draw(nowShowIndex);
};


arr_right.onclick = function () {

    sliderLenta.classList.add('animated');
    if (nowShowIndex >= sliderItems.length - 1) {
        nowShowIndex = nowShowIndex + 1;
        $(sliderLenta).animate({
            left: -100 * (nowShowIndex + 1) + "%"

        }, 600, function () {
            nowShowIndex = 0;

            sliderLenta.style.left = 'left', -100 * (nowShowIndex + 1) + "%";

            sliderLenta.classList.remove('animated');
            bullets_draw(nowShowIndex);
        });
        if (sliderLenta.classList.contains('animated')) {
            return;
        }
    } else {
        nowShowIndex = nowShowIndex + 1;
        $(sliderLenta).animate({
            left: -100 * (nowShowIndex + 1) + "%"
        }, 600, function () {
            sliderLenta.classList.remove('animated');
            bullets_draw(nowShowIndex)
        })
        if (sliderLenta.classList.contains('animated')) {
            return;
        }
    }
};


sliderBullets.onclick = function () {
    if (sliderLenta.classList.contains('animated')) {
        return;
    }
    sliderLenta.classList.add('animated');
    let bullet_index = sliderBullets.index($(this));
    bullets_draw(bullet_index);
    $(sliderLenta).animate({
        left: -100 * (nowShowIndex + 1) + "%"
    }, 600, function () {
        sliderLenta.classList.remove('animated');
    })
};



// setInterval(() => {
//     slider.find('.slider-arrow-right').click()
// }, 2000);



function bullets_draw(show_index) {
    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = "white";
    }

    sliderBullets[show_index].style.backgroundColor = "blue";
}



