const link = document.querySelector('.link-menu'),
       menu = document.querySelector('.menu'),
       x = document.querySelector('.x-close');
      
link.addEventListener ('click', function(e) {
 menu.style.display = 'flex'; 
 document.body.style.overflow = "hidden";
});

x.addEventListener ('click' , function(e) {
    menu.style.display = 'none';
    document.body.style.overflow = "scroll";
});

//  слайдер
const left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      block = document.querySelector('.slider-block'),
      slider = document.querySelector('.slider'),
      computed = getComputedStyle(slider);


right.addEventListener('click' , function(event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);
  
    if (!currentRight) {
        currentRight = 0;
    }

    if (currentRight < 100) {
        console.log(slider.style.right = currentRight + 100 + '%');
    }
 
    // if ( block.style.width = 540 + 'px' && currentRight < 540 ) {
    //     slider.style.right = currentRight + 540 + 'px';
    // }
});

left.addEventListener('click' , function(event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);

    if (!currentRight){
        currentRight = 0;
    }

    if (currentRight > 0){
        console.log (slider.style.right = currentRight - 100 + '%');
    }

    // if (block.style.width = 540  && currentRight > 0) {
    //     slider.style.right = currentRight - 540 + 'px';
    // }

    // в право работает +100 , влево прибавляет еще 700, итого, чтобы 
    // получить первый слайд надо отнять 800%
    // c px проблем таких нет, но адаптива не будет! пытплась писать
    //  отдельно на каждый размер экрана, но принимает значение последнего
    // при ширине 100% не восринимает размеры , нужно писать в rem 
});

// аккордеон горизонтальный
// аккордеон вертикальный
// слайдшоу