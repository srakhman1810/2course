;(function(){
// менюшка
const link = document.querySelector('.link-menu'),
    menu = document.querySelector('.menu'),
    x = document.querySelector('.x-close');
  
link.addEventListener('click', function (e) {
    menu.style.display = 'flex';
    document.body.style.overflow = "hidden";
});

x.addEventListener('click', function (e) {
    menu.style.display = 'none';
    document.body.style.overflow = "scroll";
});

// слайдер
const left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      slider = document.querySelector('.slider'),
      bar = document.querySelectorAll('.slider__bar');

    const step = 100;
    const maxRight = (bar.length - 1)*step;

  
right.addEventListener('click', function (e) {
    e.preventDefault();
    let currentRight = parseInt(slider.style.right);
    if (currentRight !== maxRight) {
        slider.style.right = currentRight + step + '%'; 
    } 
    else { 
        slider.style.right = 0 + '%';
    }
 }); 
left.addEventListener('click', function (e) {

    e.preventDefault();
    let currentRight = parseInt(slider.style.right);
    if (currentRight !== 0) {
        slider.style.right = currentRight - step + '%'; 
    } 
    else { 
        slider.style.right = maxRight + '%';
    } 
});

// function loop(direction) {
//     if (direction === 'right') {
//         slider.appendChild(slider.firstElementChild);
//         // for (let i = 0;
//         //     i < bar.length;
//         //     i++) { if (bar[i].style.animation = "right 1s linear") {
//         //     slider.appendChild(slider.firstElementChild);
//         //     }
                                                     
//         //     }    
//     }
//     else {
//         slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//         // for (let i = 0;
//         //     i < bar.length;
//         //     i++) { if (bar[i].style.animation = "left 1s linear") {
//         //     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//         //     }  
//         // }
//     }
// }

// // горизонтальный аккордеон 
const fifth = document.querySelector('#fifth'),
    li = document.querySelectorAll('.bars-type__item'),
    liLength = li.length;

fifth.addEventListener('click', function (event) {
    for (let i = 0;
        i < liLength;
        i++) {
        li[i].classList.remove('bars-type__item--active');
    }
});

for (let i = 0;
    i < liLength;
    i++) {
    li[i].addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (li[i].classList.contains('bars-type__item--active')) {
            li[i].classList.remove('bars-type__item--active');
        } else {
            for (let i = 0;
                i < liLength;
                i++) {
                li[i].classList.remove('bars-type__item--active');
            }
            li[i].classList.add('bars-type__item--active');
        }
    });
}
// вертикальный аккордеон
const name = document.querySelectorAll('.employee'),
    direction = document.querySelectorAll('.team-direction'),
    nameLength = name.length,
    directionLength = direction.length;

for (let i = 0;
    i < nameLength;
    i++) {
    name[i].addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (name[i].classList.contains('employee--active')) {
            name[i].classList.remove('employee--active');
        } else {
            for (let i = 0;
                i < nameLength;
                i++) {
                name[i].classList.remove('employee--active');
            }
            name[i].classList.add('employee--active');
        }

        for (let i = 0;
            i < directionLength;
            i++) {
            if (name[i].classList.contains('employee--active')) {
                direction[i].classList.add('team-direction--active');

            } else {
                direction[i].classList.remove('team-direction--active');
            }
        }

    });
}

// слайдшоу
const review = document.querySelector('.review'),
    slide = document.querySelectorAll('.review__block'),
    button = document.querySelectorAll('.clients__item'),
    buttonl = button.length,
    slidel = slide.length;

for (let i = 0;
    i < buttonl;
    i++) {
    button[i].addEventListener('click', function (event) {

        for (let i = 0;
            i < buttonl;
            i++) {
            if (button[i].classList.contains('clients__item--active')) {
                button[i].classList.remove('clients__item--active')
                for (let i = 0;
                    i < slidel;
                    i++) {
                    if (slide[i].classList.contains('review__block--active')) {
                        slide[i].classList.remove('review__block--active');
                    }
                }
            }
        };
        button[i].classList.add('clients__item--active');
        slide[i].classList.add('review__block--active');

    })
};

// форма 
const form = document.querySelector('.form'),
    send = document.querySelector('.button__submit'),
    check = document.querySelectorAll('.checkbox__choice'),
    modal = document.querySelector('.modal'),
    sent = document.querySelector('.modal__sent'),
    error = document.querySelector('.modal__error'),
    count = document.querySelectorAll('.count');

send.addEventListener('click', function (e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('name', form.elements.name.value);
    formData.append('cellphone', form.elements.cellphone.value);
    formData.append('comments', form.elements.text.value);
    formData.append('to', 'rakhman992@gmail.com');

    if (validateForm(form)) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        // xhr.send(JSON.stringify(formData));
        xhr.send(formData);
        xhr.addEventListener('load', e => {
            if (xhr.status === 200) {
                modal.style.display = "flex";
                sent.style.display = 'flex';
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "hidden";
                sent.style.display = 'none';
                error.style.display = "flex";
            }
        });
    }

    modal.addEventListener('click', e => {
        let element = e.target;

        if (element.tagName === 'INPUT') {
            modal.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    });

    document.addEventListener('keyup', e => {
        let keyName = e.key;
        if (keyName === 'Escape') {
            modal.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    });
});

function validateForm(form) {
    var valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.cellphone)) {
        valid = false;
    }

    if (!validateField(form.elements.text)) {
        valid = false;
    }

    return valid;
}

function validateField(cell) {
    cell.nextElementSibling.textContent = cell.validationMessage;
    return cell.checkValidity();
};
// обработка цифр и букв
for (let i = 0;
    i < count.length;
    i++) {
    count[i].addEventListener('keydown', e => {
        let c = false;
        if (e.key >= 0 || e.key <= 9 ||
            e.key == 'ArrowLeft' || e.key == 'ArrowRight' ||
            e.key == 'Backspace' || e.key == '-') {
            c = true;
        }

        if (!c) {
            e.preventDefault();
        }
        if (!c) {
            console.log('letter');
        }
        else {
            console.log('count');
        }
    });

}

})()

// карты 
;(function(){
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.77, 37.59],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([55.76, 37.59], {
        hintContent: 'мы тут!',
        balloonContent: '<div class="balloon"> улица Гранатовый переулок, 10.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'
    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/ninth/2.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }
    );

    var placemark1 = new ymaps.Placemark([55.78, 37.60], {
        hintContent: 'мы тут!',
        balloonContent: '<div class="balloon"> улица Новослободская,11.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'

    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/ninth/2.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }
    );

    var placemark2 = new ymaps.Placemark([55.76, 37.57], {
        hintContent: 'мы тут!',
        balloonContent: '<div class="balloon"> улица Заморева, 19.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'
    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/ninth/2.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }
    );

    var placemark3 = new ymaps.Placemark([55.76, 37.63], {
        hintContent: 'мы тут!',
        balloonContent: '<div class="baloon"> улица Мясницкая,6.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'
    },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/ninth/2.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        }
    );

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);

}  

})()
;(function(){
const sections = $('.section');
const display = $('.page');
let inScroll = false;

const performTransition = sectionEq => {
    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;
        // if (isNaN(position)) {
        //     console.error("передано не верное значение в performTransition")
        // }

        sections
            .eq(sectionEq)
            .addClass('active')
            .siblings()
            .removeClass('active');
        display.css({
            transform: `translateY(${position}%)`
        })
        setTimeout(() => {
            inScroll = false;
            $('.sidebar__item')
                .eq(sectionEq)
                .addClass('sidebar__item--active')
                .siblings()
                .removeClass('sidebar__item--active');
        }, 1300);
    }
}

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    if (direction == 'next' && nextSection.length) {
        performTransition(nextSection.index())
    }
    if (direction == 'prev' && prevSection.length) {
        performTransition(prevSection.index())
    }
}

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
        scrollToSection('next');
        console.log(deltaY);
    }
    if (deltaY < 0) {
        scrollToSection('prev');
        console.log(deltaY);
    }
});

$(window).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName !== 'input' && tagName !== 'textarea') {
        switch (e.keyCode) {
            case 38:
                scrollToSection('prev');
                break;
            case 40:
                scrollToSection('next');
                break;
        }
    }
});

$("[data-scroll-to]").on("click", e => {
   e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr('data-scroll-to');
  performTransition(target);
});

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
// const menu = $('.menu');

if (isMobile) {
  $("body").swipe({
    swipe: function 
    (event, 
    direction, 
    distance, 
    duration, 
    fingerCount, 
    fingerData) {
    const scrollDirections = direction == 'up' ? 'next' : 'prev';
    // if ($('.menu').hasStyle('flex')) return;
    scrollToSection(scrollDirections);
  
    }

  });

}

})()

;(function(){

const video = document.querySelector('.video'),
    play = document.querySelector('.play'),
    duration = document.querySelector('.progress'),
    laut = document.querySelector('.laut'),
    volume = document.querySelector('.volume'),
    playIcon = document.querySelector('.play-icon'),
    pauseIcon = document.querySelector('.pause-icon'),
    muteIcon = document.querySelector('.mute-icon'),
    volumeIcon = document.querySelector('.volume-icon'),
    playBig = document.querySelector('.video-icon'),
    curtimetext = document.querySelector('.curtimetext'),
    durtimetext = document.querySelector('.durtimetext');

play.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
    }
});

video.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();  
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
  
    }
});

playBig.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();  
        playIcon.style.opacity = "0";
        pauseIcon.style.opacity = "1";
        playBig.style.opacity ="0";
    }
    else {
        video.pause();
        pauseIcon.style.opacity = "0";
        playIcon.style.opacity = "1";
        playBig.style.opacity ="1";
  
    }
});


laut.addEventListener('click', function (e) {

    if (video.muted) {
        video.muted = false;
        volume.value = 100;
        volumeIcon.style.opacity = "1";
        muteIcon.style.opacity = "0";
    }
    else {
        video.muted = true;
        volume.value = 0;
        volumeIcon.style.opacity = "0";
        muteIcon.style.opacity = "1";
    }
});

volume.addEventListener('mousemove', function (e) {
    video.volume = volume.value / 100;

});


video.ontimeupdate = progressUpdate;
function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = 100 * c / d;
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.round(video.duration - durmins * 60);
    if (cursecs<10) {
        cursecs = "0"+cursecs;
    }
    if (dursecs<10) {
        dursecs = "0"+dursecs;
    }
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML=  durmins+":"+dursecs;
}

progress.addEventListener('click', function(e) {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
})

})()







