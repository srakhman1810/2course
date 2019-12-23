
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



// // One Page Scroll ================
// const sections = $('.section');
// const display = $('.wrapper__content');
// let inScroll = false;
// const mobileDetect = new MobileDetect(window.navigator.userAgent);
// const isMobile = mobileDetect.mobile();
// const performTransition = sectionEq => {
//   if (inScroll == false) {
//     inScroll = true;
//     const position = sectionEq * -100;
//     if (isNaN(position)) {
//       console.error("передано не верное значение в performTransition")
//     }
//     sections
//       .eq(sectionEq)
//       .addClass('active')
//       .siblings()
//       .removeClass('active');
//     display.css({
//       transform: `translateY(${position}%)`
//     })
//     setTimeout(() => {
//       inScroll = false;
//       $('.fixed-menu__item')
//         .eq(sectionEq)
//         .addClass('active')
//         .siblings()
//         .removeClass('active');
//     }, 1300);
//   }
// }
// const scrollToSection = direction => {
//   const activeSection = sections.filter('.active');
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();
//   if (direction == 'next' && nextSection.length) {
//     performTransition(nextSection.index())
//   }
//   if (direction == 'prev' && prevSection.length) {
//     performTransition(prevSection.index())
//   }
// }
// $(window).on('wheel', e => {
//   const deltaY = e.originalEvent.deltaY;
//   if (deltaY > 0) {
//     scrollToSection('next');
//     // console.log('next');
//   }
//   if (deltaY < 0) {
//     scrollToSection('prev');
//     // console.log('prev');
//   }
// });
// $(window).on('keydown', e => {
//   const tagName = e.target.tagName.toLowerCase();
//   if (tagName !== 'input' && tagName !== 'textarea') {
//     switch (e.keyCode) {
//       case 38:
//         scrollToSection('prev');
//         break;
//       case 40:
//         scrollToSection('next');
//         break;
//     }
//   }
// });
// $("[data-scroll-to]").on("click", e => {
//   e.preventDefault();
//   const $this = $(e.currentTarget);
//   const target = $this.attr('data-scroll-to');
//   performTransition(target);
// });
// if (isMobile) {
//   $("body").swipe({
//     //Generic swipe handler for all directions
//     swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//       const scrollDirections = direction == 'up' ? 'next' : 'prev';
//       scrollToSection(scrollDirections);
//     }
//   });
// }
