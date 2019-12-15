
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
    
fifth.addEventListener('click', function(event) {
    for (let i = 0;
        i < liLength;
        i++) {
        li[i].classList.remove('bars-type__item--active');
    }
});

for (let i = 0;
    i < liLength;
    i++) {
    li[i].addEventListener('click', function(event) {
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
            name[i].addEventListener('click', function(event){
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

    
    
    
     






