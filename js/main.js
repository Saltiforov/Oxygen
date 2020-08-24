$(document).ready(function (){
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
})
$(function() {
    $('.section__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/prev-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/next-arrow.svg" alt=""></button>',
        // fade: true
        dots:true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})
let aviableValue = ['1','2','3','4']
let inputName = document.getElementById('inputName')
let inputEmail = document.getElementById('inputEmail')
let txtErrorNameInputNumber = document.getElementById('errorNumber')
let txtErrorEmailInputNumber = document.getElementById('errorNumberEmail')
inputName.oninput = function (){
    if (/\d/.test(inputName.value) ){
        inputName.classList.add('Error')
        txtErrorNameInputNumber.classList.remove('numberError')
        txtErrorNameInputNumber.classList.add('numberErrorTrue')
    }else {
        inputName.classList.remove('Error')
        txtErrorNameInputNumber.classList.remove('numberErrorTrue')
        txtErrorNameInputNumber.classList.add('numberError')
    }
}
inputEmail.oninput = function (){
    if (/\S\w+@\w+\.\w+/.test(inputEmail.value) ){
        inputEmail.classList.remove('Error')
        txtErrorEmailInputNumber.classList.remove('numberErrorEmailTrue')
        txtErrorEmailInputNumber.classList.add('numberErrorEmail') // скырть ошибку
    }else {
        console.log(inputEmail.value)
        inputEmail.classList.add('Error')
        txtErrorEmailInputNumber.classList.remove('numberErrorEmail')
        txtErrorEmailInputNumber.classList.add('numberErrorEmailTrue')
    }
}
$('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    $('html, body').animate({scrollTop: dn}, 1000);
    /*
    * 1000 скорость перехода в миллисекундах
    */
});

new WOW().init();

function offset(el){
    const  rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {top:rect.top + scrollTop,left:rect.left + scrollLeft}
}
let stop = 4500
window.addEventListener('scroll', function() {
    const animItem = document.querySelector('#elem')
    const animItemHeight = animItem.offsetHeight // получаем высоту объекста
    const animItemOffset = offset(animItem).top // позиция объекта относительно верха страницы
    const height = animItemOffset
    const animStart = 4 // кооф. который регулирует момент старта анимации
    let animItemPoint = window.innerHeight - animItemHeight / animStart // от высоты окна брауезра отнимаем высоту объекта/ на кооф.
    // console.log(animItemOffset)
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        const counters = document.querySelectorAll('.counter')
        const speed = 4500

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target')
                const count = +counter.innerText

                const inc = target / speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc)
                    setTimeout(updateCount, 1)
                } else {
                    count.innerText = target;
                }
            }
            updateCount()
        })
    } else if (height >= stop) {

    }
})
const filterBox = document.querySelectorAll('.box')
const  sharpItems = document.getElementById('sharpGrid')
document.querySelector('.menu').addEventListener('click',event => {
    let filterClass = event.target.dataset['f']
    if (filterClass === 'all'){
        sharpItems.classList = [];
        sharpItems.classList.add('grid');
        filterBox.forEach(elem =>{
            elem.classList.remove('hide')
            elem.classList.add('grid-item')
            elem.classList.remove('filterGrid__item')
        })
    }else {
        filterBox.forEach(elem =>{
            if(!elem.classList.contains(filterClass))
            {
                elem.classList.add('hide')
                elem.classList.remove('grid-item')
            }else{
                sharpItems.classList.remove('grid')
                elem.classList.remove('grid-item')
                elem.classList.remove('hide')
                elem.classList.add('filterGrid__item')
                sharpItems.classList.add('filterGrid')
            }
        })
    }

})
