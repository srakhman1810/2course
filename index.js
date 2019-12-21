
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
    computed = getComputedStyle(slider),
    bar = document.querySelectorAll('.bar');


right.addEventListener('click', function (event) {
    event.preventDefault();
    loop('right');
});

left.addEventListener('click', function (event) {
    event.preventDefault();
    loop('left');
});

function loop(direction) {
    if (direction === 'right') {
        slider.appendChild(slider.firstElementChild);
        for (let i = 0;
            i < bar.length;
            i++) {
            if (bar[i].style.animation = "right 1s linear") {
            // slider.appendChild(slider.firstElementChild);
            slider.insertBefore(slider.firstElementChild, slider.lastElementChild);
            }
        }
    }

    else {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        for (let i = 0;
            i < bar.length;
            i++) { if (bar[i].style.animation = "left 1s linear") 
             {  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
            }
        }
    }
}

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





















