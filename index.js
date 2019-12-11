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


