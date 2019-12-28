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








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibWFwLmpzIiwib25lcGFnZS5qcyIsInBsZWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25SQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCl7XG4vLyDQvNC10L3RjtGI0LrQsFxuY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLW1lbnUnKSxcbiAgICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKSxcbiAgICB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtY2xvc2UnKTtcbiAgXG5saW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG59KTtcblxueC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xufSk7XG5cbi8vINGB0LvQsNC50LTQtdGAXG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKSxcbiAgICAgIHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0JyksXG4gICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyksXG4gICAgICBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19iYXInKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAxMDA7XG4gICAgY29uc3QgbWF4UmlnaHQgPSAoYmFyLmxlbmd0aCAtIDEpKnN0ZXA7XG5cbiAgXG5yaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjdXJyZW50UmlnaHQgPSBwYXJzZUludChzbGlkZXIuc3R5bGUucmlnaHQpO1xuICAgIGlmIChjdXJyZW50UmlnaHQgIT09IG1heFJpZ2h0KSB7XG4gICAgICAgIHNsaWRlci5zdHlsZS5yaWdodCA9IGN1cnJlbnRSaWdodCArIHN0ZXAgKyAnJSc7IFxuICAgIH0gXG4gICAgZWxzZSB7IFxuICAgICAgICBzbGlkZXIuc3R5bGUucmlnaHQgPSAwICsgJyUnO1xuICAgIH1cbiB9KTsgXG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3VycmVudFJpZ2h0ID0gcGFyc2VJbnQoc2xpZGVyLnN0eWxlLnJpZ2h0KTtcbiAgICBpZiAoY3VycmVudFJpZ2h0ICE9PSAwKSB7XG4gICAgICAgIHNsaWRlci5zdHlsZS5yaWdodCA9IGN1cnJlbnRSaWdodCAtIHN0ZXAgKyAnJSc7IFxuICAgIH0gXG4gICAgZWxzZSB7IFxuICAgICAgICBzbGlkZXIuc3R5bGUucmlnaHQgPSBtYXhSaWdodCArICclJztcbiAgICB9IFxufSk7XG5cbi8vIGZ1bmN0aW9uIGxvb3AoZGlyZWN0aW9uKSB7XG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuLy8gICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkKTtcbi8vICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7XG4vLyAgICAgICAgIC8vICAgICBpIDwgYmFyLmxlbmd0aDtcbi8vICAgICAgICAgLy8gICAgIGkrKykgeyBpZiAoYmFyW2ldLnN0eWxlLmFuaW1hdGlvbiA9IFwicmlnaHQgMXMgbGluZWFyXCIpIHtcbi8vICAgICAgICAgLy8gICAgIHNsaWRlci5hcHBlbmRDaGlsZChzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuLy8gICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgIH0gICAgXG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICBzbGlkZXIuaW5zZXJ0QmVmb3JlKHNsaWRlci5sYXN0RWxlbWVudENoaWxkLCBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuLy8gICAgICAgICAvLyBmb3IgKGxldCBpID0gMDtcbi8vICAgICAgICAgLy8gICAgIGkgPCBiYXIubGVuZ3RoO1xuLy8gICAgICAgICAvLyAgICAgaSsrKSB7IGlmIChiYXJbaV0uc3R5bGUuYW5pbWF0aW9uID0gXCJsZWZ0IDFzIGxpbmVhclwiKSB7XG4vLyAgICAgICAgIC8vICAgICBzbGlkZXIuaW5zZXJ0QmVmb3JlKHNsaWRlci5sYXN0RWxlbWVudENoaWxkLCBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuLy8gICAgICAgICAvLyAgICAgfSAgXG4vLyAgICAgICAgIC8vIH1cbi8vICAgICB9XG4vLyB9XG5cbi8vIC8vINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0Lkg0LDQutC60L7RgNC00LXQvtC9IFxuY29uc3QgZmlmdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlmdGgnKSxcbiAgICBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXJzLXR5cGVfX2l0ZW0nKSxcbiAgICBsaUxlbmd0aCA9IGxpLmxlbmd0aDtcblxuZmlmdGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDtcbiAgICAgICAgaSA8IGxpTGVuZ3RoO1xuICAgICAgICBpKyspIHtcbiAgICAgICAgbGlbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYmFycy10eXBlX19pdGVtLS1hY3RpdmUnKTtcbiAgICB9XG59KTtcblxuZm9yIChsZXQgaSA9IDA7XG4gICAgaSA8IGxpTGVuZ3RoO1xuICAgIGkrKykge1xuICAgIGxpW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChsaVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhcnMtdHlwZV9faXRlbS0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGxpW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JhcnMtdHlwZV9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICBpIDwgbGlMZW5ndGg7XG4gICAgICAgICAgICAgICAgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYmFycy10eXBlX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpW2ldLmNsYXNzTGlzdC5hZGQoJ2JhcnMtdHlwZV9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vINCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSDQsNC60LrQvtGA0LTQtdC+0L1cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW1wbG95ZWUnKSxcbiAgICBkaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbS1kaXJlY3Rpb24nKSxcbiAgICBuYW1lTGVuZ3RoID0gbmFtZS5sZW5ndGgsXG4gICAgZGlyZWN0aW9uTGVuZ3RoID0gZGlyZWN0aW9uLmxlbmd0aDtcblxuZm9yIChsZXQgaSA9IDA7XG4gICAgaSA8IG5hbWVMZW5ndGg7XG4gICAgaSsrKSB7XG4gICAgbmFtZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAobmFtZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcGxveWVlLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgbmFtZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdlbXBsb3llZS0tYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICBpIDwgbmFtZUxlbmd0aDtcbiAgICAgICAgICAgICAgICBpKyspIHtcbiAgICAgICAgICAgICAgICBuYW1lW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcGxveWVlLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hbWVbaV0uY2xhc3NMaXN0LmFkZCgnZW1wbG95ZWUtLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7XG4gICAgICAgICAgICBpIDwgZGlyZWN0aW9uTGVuZ3RoO1xuICAgICAgICAgICAgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmFtZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcGxveWVlLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbltpXS5jbGFzc0xpc3QuYWRkKCd0ZWFtLWRpcmVjdGlvbi0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3RlYW0tZGlyZWN0aW9uLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cbi8vINGB0LvQsNC50LTRiNC+0YNcbmNvbnN0IHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXcnKSxcbiAgICBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdfX2Jsb2NrJyksXG4gICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWVudHNfX2l0ZW0nKSxcbiAgICBidXR0b25sID0gYnV0dG9uLmxlbmd0aCxcbiAgICBzbGlkZWwgPSBzbGlkZS5sZW5ndGg7XG5cbmZvciAobGV0IGkgPSAwO1xuICAgIGkgPCBidXR0b25sO1xuICAgIGkrKykge1xuICAgIGJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwO1xuICAgICAgICAgICAgaSA8IGJ1dHRvbmw7XG4gICAgICAgICAgICBpKyspIHtcbiAgICAgICAgICAgIGlmIChidXR0b25baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGllbnRzX19pdGVtLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdjbGllbnRzX19pdGVtLS1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpIDwgc2xpZGVsO1xuICAgICAgICAgICAgICAgICAgICBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlW2ldLmNsYXNzTGlzdC5jb250YWlucygncmV2aWV3X19ibG9jay0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Jldmlld19fYmxvY2stLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBidXR0b25baV0uY2xhc3NMaXN0LmFkZCgnY2xpZW50c19faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIHNsaWRlW2ldLmNsYXNzTGlzdC5hZGQoJ3Jldmlld19fYmxvY2stLWFjdGl2ZScpO1xuXG4gICAgfSlcbn07XG5cbi8vINGE0L7RgNC80LAgXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSxcbiAgICBzZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9fc3VibWl0JyksXG4gICAgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2Nob2ljZScpLFxuICAgIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyksXG4gICAgc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fc2VudCcpLFxuICAgIGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19lcnJvcicpLFxuICAgIGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50Jyk7XG5cbnNlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIGZvcm0uZWxlbWVudHMubmFtZS52YWx1ZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjZWxscGhvbmUnLCBmb3JtLmVsZW1lbnRzLmNlbGxwaG9uZS52YWx1ZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb21tZW50cycsIGZvcm0uZWxlbWVudHMudGV4dC52YWx1ZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0bycsICdyYWtobWFuOTkyQGdtYWlsLmNvbScpO1xuXG4gICAgaWYgKHZhbGlkYXRlRm9ybShmb3JtKSkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XG4gICAgICAgIC8vIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgc2VudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICBzZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICBsZXQga2V5TmFtZSA9IGUua2V5O1xuICAgICAgICBpZiAoa2V5TmFtZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMubmFtZSkpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5jZWxscGhvbmUpKSB7XG4gICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMudGV4dCkpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoY2VsbCkge1xuICAgIGNlbGwubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gY2VsbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICByZXR1cm4gY2VsbC5jaGVja1ZhbGlkaXR5KCk7XG59O1xuLy8g0L7QsdGA0LDQsdC+0YLQutCwINGG0LjRhNGAINC4INCx0YPQutCyXG5mb3IgKGxldCBpID0gMDtcbiAgICBpIDwgY291bnQubGVuZ3RoO1xuICAgIGkrKykge1xuICAgIGNvdW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgbGV0IGMgPSBmYWxzZTtcbiAgICAgICAgaWYgKGUua2V5ID49IDAgfHwgZS5rZXkgPD0gOSB8fFxuICAgICAgICAgICAgZS5rZXkgPT0gJ0Fycm93TGVmdCcgfHwgZS5rZXkgPT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgICAgICBlLmtleSA9PSAnQmFja3NwYWNlJyB8fCBlLmtleSA9PSAnLScpIHtcbiAgICAgICAgICAgIGMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGV0dGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY291bnQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbn0pKClcbiIsIi8vINC60LDRgNGC0YsgXG47KGZ1bmN0aW9uKCl7XG55bWFwcy5yZWFkeShpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgbWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgICAgICBjZW50ZXI6IFs1NS43NywgMzcuNTldLFxuICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgY29udHJvbHM6IFsnem9vbUNvbnRyb2wnXSxcbiAgICAgICAgYmVoYXZpb3JzOiBbJ2RyYWcnXVxuICAgIH0pO1xuXG4gICAgdmFyIHBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc2LCAzNy41OV0sIHtcbiAgICAgICAgaGludENvbnRlbnQ6ICfQvNGLINGC0YPRgiEnLFxuICAgICAgICBiYWxsb29uQ29udGVudDogJzxkaXYgY2xhc3M9XCJiYWxsb29uXCI+INGD0LvQuNGG0LAg0JPRgNCw0L3QsNGC0L7QstGL0Lkg0L/QtdGA0LXRg9C70L7QuiwgMTAuPC9icj4g0JPRgNCw0YTQuNC6INGA0LDQsdC+0YLRiyA8L2JyPiDRgSDQn9CdLdCf0KI6IDktMTg6MDA8L2JyPiDQodCRLdCS0KE6INCy0YvRhdC+0LTQvdGL0LUg0LTQvdC4IDwvZGl2PidcbiAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvbmludGgvMi5wbmcnLFxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjMsIC01N11cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB2YXIgcGxhY2VtYXJrMSA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc4LCAzNy42MF0sIHtcbiAgICAgICAgaGludENvbnRlbnQ6ICfQvNGLINGC0YPRgiEnLFxuICAgICAgICBiYWxsb29uQ29udGVudDogJzxkaXYgY2xhc3M9XCJiYWxsb29uXCI+INGD0LvQuNGG0LAg0J3QvtCy0L7RgdC70L7QsdC+0LTRgdC60LDRjywxMS48L2JyPiDQk9GA0LDRhNC40Log0YDQsNCx0L7RgtGLIDwvYnI+INGBINCf0J0t0J/QojogOS0xODowMDwvYnI+INCh0JEt0JLQoTog0LLRi9GF0L7QtNC90YvQtSDQtNC90LggPC9kaXY+J1xuXG4gICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vaW1nL25pbnRoLzIucG5nJyxcbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTIzLCAtNTddXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdmFyIHBsYWNlbWFyazIgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NiwgMzcuNTddLCB7XG4gICAgICAgIGhpbnRDb250ZW50OiAn0LzRiyDRgtGD0YIhJyxcbiAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwiYmFsbG9vblwiPiDRg9C70LjRhtCwINCX0LDQvNC+0YDQtdCy0LAsIDE5LjwvYnI+INCT0YDQsNGE0LjQuiDRgNCw0LHQvtGC0YsgPC9icj4g0YEg0J/QnS3Qn9CiOiA5LTE4OjAwPC9icj4g0KHQkS3QktChOiDQstGL0YXQvtC00L3Ri9C1INC00L3QuCA8L2Rpdj4nXG4gICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vaW1nL25pbnRoLzIucG5nJyxcbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTIzLCAtNTddXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdmFyIHBsYWNlbWFyazMgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NiwgMzcuNjNdLCB7XG4gICAgICAgIGhpbnRDb250ZW50OiAn0LzRiyDRgtGD0YIhJyxcbiAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwiYmFsb29uXCI+INGD0LvQuNGG0LAg0JzRj9GB0L3QuNGG0LrQsNGPLDYuPC9icj4g0JPRgNCw0YTQuNC6INGA0LDQsdC+0YLRiyA8L2JyPiDRgSDQn9CdLdCf0KI6IDktMTg6MDA8L2JyPiDQodCRLdCS0KE6INCy0YvRhdC+0LTQvdGL0LUg0LTQvdC4IDwvZGl2PidcbiAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvbmludGgvMi5wbmcnLFxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjMsIC01N11cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTtcbiAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrMSk7XG4gICAgbWFwLmdlb09iamVjdHMuYWRkKHBsYWNlbWFyazIpO1xuICAgIG1hcC5nZW9PYmplY3RzLmFkZChwbGFjZW1hcmszKTtcblxufSAgXG5cbn0pKCkiLCI7KGZ1bmN0aW9uKCl7XG5jb25zdCBzZWN0aW9ucyA9ICQoJy5zZWN0aW9uJyk7XG5jb25zdCBkaXNwbGF5ID0gJCgnLnBhZ2UnKTtcbmxldCBpblNjcm9sbCA9IGZhbHNlO1xuXG5jb25zdCBwZXJmb3JtVHJhbnNpdGlvbiA9IHNlY3Rpb25FcSA9PiB7XG4gICAgaWYgKGluU2Nyb2xsID09IGZhbHNlKSB7XG4gICAgICAgIGluU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzZWN0aW9uRXEgKiAtMTAwO1xuICAgICAgICAvLyBpZiAoaXNOYU4ocG9zaXRpb24pKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi0L/QtdGA0LXQtNCw0L3QviDQvdC1INCy0LXRgNC90L7QtSDQt9C90LDRh9C10L3QuNC1INCyIHBlcmZvcm1UcmFuc2l0aW9uXCIpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBzZWN0aW9uc1xuICAgICAgICAgICAgLmVxKHNlY3Rpb25FcSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBkaXNwbGF5LmNzcyh7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7cG9zaXRpb259JSlgXG4gICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyX19pdGVtJylcbiAgICAgICAgICAgICAgICAuZXEoc2VjdGlvbkVxKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2lkZWJhcl9faXRlbS0tYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2lkZWJhcl9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIH0sIDEzMDApO1xuICAgIH1cbn1cblxuY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gZGlyZWN0aW9uID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKCcuYWN0aXZlJyk7XG4gICAgY29uc3QgbmV4dFNlY3Rpb24gPSBhY3RpdmVTZWN0aW9uLm5leHQoKTtcbiAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ucHJldigpO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gJ25leHQnICYmIG5leHRTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBwZXJmb3JtVHJhbnNpdGlvbihuZXh0U2VjdGlvbi5pbmRleCgpKVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09ICdwcmV2JyAmJiBwcmV2U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybVRyYW5zaXRpb24ocHJldlNlY3Rpb24uaW5kZXgoKSlcbiAgICB9XG59XG5cbiQod2luZG93KS5vbignd2hlZWwnLCBlID0+IHtcbiAgICBjb25zdCBkZWx0YVkgPSBlLm9yaWdpbmFsRXZlbnQuZGVsdGFZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWx0YVkpO1xuICAgIH1cbiAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVsdGFZKTtcbiAgICB9XG59KTtcblxuJCh3aW5kb3cpLm9uKCdrZXlkb3duJywgZSA9PiB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGFnTmFtZSAhPT0gJ2lucHV0JyAmJiB0YWdOYW1lICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbigncHJldicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4kKFwiW2RhdGEtc2Nyb2xsLXRvXVwiKS5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgY29uc3QgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YS1zY3JvbGwtdG8nKTtcbiAgcGVyZm9ybVRyYW5zaXRpb24odGFyZ2V0KTtcbn0pO1xuXG5jb25zdCBtb2JpbGVEZXRlY3QgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbmNvbnN0IGlzTW9iaWxlID0gbW9iaWxlRGV0ZWN0Lm1vYmlsZSgpO1xuLy8gY29uc3QgbWVudSA9ICQoJy5tZW51Jyk7XG5cbmlmIChpc01vYmlsZSkge1xuICAkKFwiYm9keVwiKS5zd2lwZSh7XG4gICAgc3dpcGU6IGZ1bmN0aW9uIFxuICAgIChldmVudCwgXG4gICAgZGlyZWN0aW9uLCBcbiAgICBkaXN0YW5jZSwgXG4gICAgZHVyYXRpb24sIFxuICAgIGZpbmdlckNvdW50LCBcbiAgICBmaW5nZXJEYXRhKSB7XG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9ucyA9IGRpcmVjdGlvbiA9PSAndXAnID8gJ25leHQnIDogJ3ByZXYnO1xuICAgIC8vIGlmICgkKCcubWVudScpLmhhc1N0eWxlKCdmbGV4JykpIHJldHVybjtcbiAgICBzY3JvbGxUb1NlY3Rpb24oc2Nyb2xsRGlyZWN0aW9ucyk7XG4gIFxuICAgIH1cblxuICB9KTtcblxufVxuXG59KSgpXG4iLCI7KGZ1bmN0aW9uKCl7XG5cbmNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvJyksXG4gICAgcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JyksXG4gICAgZHVyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKSxcbiAgICBsYXV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdXQnKSxcbiAgICB2b2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudm9sdW1lJyksXG4gICAgcGxheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1pY29uJyksXG4gICAgcGF1c2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlLWljb24nKSxcbiAgICBtdXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXRlLWljb24nKSxcbiAgICB2b2x1bWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZS1pY29uJyksXG4gICAgcGxheUJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1pY29uJyksXG4gICAgY3VydGltZXRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VydGltZXRleHQnKSxcbiAgICBkdXJ0aW1ldGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdXJ0aW1ldGV4dCcpO1xuXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBwYXVzZUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgcGF1c2VJY29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMVwiO1xuICAgIH1cbn0pO1xuXG52aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICB2aWRlby5wbGF5KCk7ICBcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBwYXVzZUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgcGF1c2VJY29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMVwiO1xuICBcbiAgICB9XG59KTtcblxucGxheUJpZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICB2aWRlby5wbGF5KCk7ICBcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBwYXVzZUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgcGF1c2VJY29uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgcGxheUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBwbGF5QmlnLnN0eWxlLm9wYWNpdHkgPVwiMVwiO1xuICBcbiAgICB9XG59KTtcblxuXG5sYXV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgIGlmICh2aWRlby5tdXRlZCkge1xuICAgICAgICB2aWRlby5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB2b2x1bWUudmFsdWUgPSAxMDA7XG4gICAgICAgIHZvbHVtZUljb24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICBtdXRlSWNvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgICAgIHZvbHVtZS52YWx1ZSA9IDA7XG4gICAgICAgIHZvbHVtZUljb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICBtdXRlSWNvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfVxufSk7XG5cbnZvbHVtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZS52YWx1ZSAvIDEwMDtcblxufSk7XG5cblxudmlkZW8ub250aW1ldXBkYXRlID0gcHJvZ3Jlc3NVcGRhdGU7XG5mdW5jdGlvbiBwcm9ncmVzc1VwZGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyh2aWRlby5kdXJhdGlvbik7XG4gICAgY29uc29sZS5sb2codmlkZW8uY3VycmVudFRpbWUpO1xuICAgIGxldCBkID0gdmlkZW8uZHVyYXRpb247XG4gICAgbGV0IGMgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICBwcm9ncmVzcy52YWx1ZSA9IDEwMCAqIGMgLyBkO1xuICAgIHZhciBjdXJtaW5zID0gTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSAvIDYwKTtcbiAgICB2YXIgY3Vyc2VjcyA9IE1hdGguZmxvb3IodmlkZW8uY3VycmVudFRpbWUgLSBjdXJtaW5zICogNjApO1xuICAgIHZhciBkdXJtaW5zID0gTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDYwKTtcbiAgICB2YXIgZHVyc2VjcyA9IE1hdGgucm91bmQodmlkZW8uZHVyYXRpb24gLSBkdXJtaW5zICogNjApO1xuICAgIGlmIChjdXJzZWNzPDEwKSB7XG4gICAgICAgIGN1cnNlY3MgPSBcIjBcIitjdXJzZWNzO1xuICAgIH1cbiAgICBpZiAoZHVyc2VjczwxMCkge1xuICAgICAgICBkdXJzZWNzID0gXCIwXCIrZHVyc2VjcztcbiAgICB9XG4gICAgY3VydGltZXRleHQuaW5uZXJIVE1MID0gY3VybWlucytcIjpcIitjdXJzZWNzO1xuICAgIGR1cnRpbWV0ZXh0LmlubmVySFRNTD0gIGR1cm1pbnMrXCI6XCIrZHVyc2Vjcztcbn1cblxucHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHcgPSB0aGlzLm9mZnNldFdpZHRoO1xuICAgIGxldCBvID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLnZhbHVlID0gMTAwICogbyAvIHc7XG4gICAgdmlkZW8ucGF1c2UoKTtcbiAgICB2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvLmR1cmF0aW9uICogKG8gLyB3KTtcbiAgICB2aWRlby5wbGF5KCk7XG59KVxuXG59KSgpXG5cblxuXG5cblxuXG5cbiJdfQ==
