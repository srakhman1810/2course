
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
    computed = getComputedStyle(slider);


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
    } else {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
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
                button[i].classList.remove('clients__item--active');
                slide[i].classList.remove('review__block--active');
            }
        }
        button[i].classList.add('clients__item--active');
        slide[i].classList.add('review__block--active');

    })
};

// форма 

const form = document.querySelector('.form'),
    send = document.querySelector('.button__submit'),
    check = document.querySelectorAll('.checkbox__choice');

send.addEventListener('click', function (e) {
    e.preventDefault();

        let formData = new FormData(); 
        formData.append('file' , { 
           name: form.elements.name.value ,
           cellphone:  form.elements.cellphone.value ,
           comments: form.elements.text.value
        }
       );

        if (validateForm(form)){
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST' , 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(formData));
        xhr.addEventListener('load', () => {
           if(xhr.response.status){
            console.log('все ок')
           };
        });
    }

    // if (validateForm(form)) {
    //     console.log('все заполнено');
    // }

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
}


    //  function validateField(field) {
    //     if (!field.checkValidity()) {
    //         field.nextElementSibling.textContent = field.validationMessage;
    //         return false;
    //      } else { 
    //         field.nextElementSibling.textContent = '';
    //         return true;
    //      }
    //  }

      //  console.log(form.elements.name.value);
        //  console.log(form.elements.cellphone.value);
        //  console.log(form.elements.street.value);
        //  console.log(form.elements.house.value);
        //  console.log(form.elements.building.value);
        //  console.log(form.elements.apartment.value);
        //  console.log(form.elements.floor.value);
        //  console.log(form.elements.text.value);
        //  if (form.elements.checkbox.checked==true) {
        //     console.log('не перезванивать') }
        //     else { console.log('перезвонить') 
        //    } ;

        // if (form.elements.pay.checked == true) {
        //     console.log('потребуется сдача')}
        // else { console.log('оплата по карте')};  



























