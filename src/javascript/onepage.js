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
