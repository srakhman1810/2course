"use strict";!function(){var e=document.querySelector(".link-menu"),t=document.querySelector(".menu"),o=document.querySelector(".x-close");e.addEventListener("click",function(e){t.style.display="flex",document.body.style.overflow="hidden"}),o.addEventListener("click",function(e){t.style.display="none",document.body.style.overflow="scroll"});var n=document.querySelector(".left"),a=document.querySelector(".right"),i=document.querySelector(".slider"),c=document.querySelectorAll(".slider__bar"),l=100*(c.length-1);a.addEventListener("click",function(e){e.preventDefault();var t=parseInt(i.style.right);i.style.right=t!==l?t+100+"%":"0%"}),n.addEventListener("click",function(e){e.preventDefault();var t=parseInt(i.style.right);i.style.right=0!==t?t-100+"%":l+"%"});var r=document.querySelector("#fifth"),s=document.querySelectorAll(".bars-type__item"),d=s.length;r.addEventListener("click",function(e){for(var t=0;t<d;t++)s[t].classList.remove("bars-type__item--active")});for(var u=function(o){s[o].addEventListener("click",function(e){if(e.preventDefault(),e.stopPropagation(),s[o].classList.contains("bars-type__item--active"))s[o].classList.remove("bars-type__item--active");else{for(var t=0;t<d;t++)s[t].classList.remove("bars-type__item--active");s[o].classList.add("bars-type__item--active")}})},m=0;m<d;m++)u(m);for(var y=document.querySelectorAll(".employee"),v=document.querySelectorAll(".team-direction"),p=y.length,f=v.length,g=function(n){y[n].addEventListener("click",function(e){if(e.preventDefault(),e.stopPropagation(),y[n].classList.contains("employee--active"))y[n].classList.remove("employee--active");else{for(var t=0;t<p;t++)y[t].classList.remove("employee--active");y[n].classList.add("employee--active")}for(var o=0;o<f;o++)y[o].classList.contains("employee--active")?v[o].classList.add("team-direction--active"):v[o].classList.remove("team-direction--active")})},b=0;b<p;b++)g(b);document.querySelector(".review");for(var h=document.querySelectorAll(".review__block"),L=document.querySelectorAll(".clients__item"),_=L.length,k=h.length,S=function(n){L[n].addEventListener("click",function(e){for(var t=0;t<_;t++)if(L[t].classList.contains("clients__item--active")){L[t].classList.remove("clients__item--active");for(var o=0;o<k;o++)h[o].classList.contains("review__block--active")&&h[o].classList.remove("review__block--active")}L[n].classList.add("clients__item--active"),h[n].classList.add("review__block--active")})},q=0;q<_;q++)S(q);var w=document.querySelector(".form"),E=document.querySelector(".button__submit"),x=(document.querySelectorAll(".checkbox__choice"),document.querySelector(".modal")),C=document.querySelector(".modal__sent"),I=document.querySelector(".modal__error"),T=document.querySelectorAll(".count");function A(e){return e.nextElementSibling.textContent=e.validationMessage,e.checkValidity()}E.addEventListener("click",function(e){e.preventDefault();var t=new FormData;if(t.append("name",w.elements.name.value),t.append("cellphone",w.elements.cellphone.value),t.append("comments",w.elements.text.value),t.append("to","rakhman992@gmail.com"),function(e){var t=!0;A(e.elements.name)||(t=!1);A(e.elements.cellphone)||(t=!1);A(e.elements.text)||(t=!1);return t}(w)){var o=new XMLHttpRequest;o.responseType="json",o.open("POST","https://webdev-api.loftschool.com/sendmail"),o.send(t),o.addEventListener("load",function(e){200===o.status?(x.style.display="flex",C.style.display="flex",document.body.style.overflow="hidden"):(document.body.style.overflow="hidden",C.style.display="none",I.style.display="flex")})}x.addEventListener("click",function(e){"INPUT"===e.target.tagName&&(x.style.display="none",document.body.style.overflow="scroll")}),document.addEventListener("keyup",function(e){"Escape"===e.key&&(x.style.display="none",document.body.style.overflow="scroll")})});for(var M=0;M<T.length;M++)T[M].addEventListener("keydown",function(e){var t=!1;(0<=e.key||e.key<=9||"ArrowLeft"==e.key||"ArrowRight"==e.key||"Backspace"==e.key||"-"==e.key)&&(t=!0),t||e.preventDefault(),t?console.log("count"):console.log("letter")})}(),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[55.77,37.59],zoom:13,controls:["zoomControl"],behaviors:["drag"]}),t=new ymaps.Placemark([55.76,37.59],{hintContent:"мы тут!",balloonContent:'<div class="balloon"> улица Гранатовый переулок, 10.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'},{iconLayout:"default#image",iconImageHref:"./img/ninth/2.png",iconImageSize:[46,57],iconImageOffset:[-23,-57]}),o=new ymaps.Placemark([55.78,37.6],{hintContent:"мы тут!",balloonContent:'<div class="balloon"> улица Новослободская,11.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'},{iconLayout:"default#image",iconImageHref:"./img/ninth/2.png",iconImageSize:[46,57],iconImageOffset:[-23,-57]}),n=new ymaps.Placemark([55.76,37.57],{hintContent:"мы тут!",balloonContent:'<div class="balloon"> улица Заморева, 19.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'},{iconLayout:"default#image",iconImageHref:"./img/ninth/2.png",iconImageSize:[46,57],iconImageOffset:[-23,-57]}),a=new ymaps.Placemark([55.76,37.63],{hintContent:"мы тут!",balloonContent:'<div class="baloon"> улица Мясницкая,6.</br> График работы </br> с ПН-ПТ: 9-18:00</br> СБ-ВС: выходные дни </div>'},{iconLayout:"default#image",iconImageHref:"./img/ninth/2.png",iconImageSize:[46,57],iconImageOffset:[-23,-57]});e.geoObjects.add(t),e.geoObjects.add(o),e.geoObjects.add(n),e.geoObjects.add(a)}),function(){function a(e){if(0==c){c=!0;var t=-100*e;i.eq(e).addClass("active").siblings().removeClass("active"),n.css({transform:"translateY(".concat(t,"%)")}),setTimeout(function(){c=!1,$(".sidebar__item").eq(e).addClass("sidebar__item--active").siblings().removeClass("sidebar__item--active")},1300)}}function o(e){var t=i.filter(".active"),o=t.next(),n=t.prev();"next"==e&&o.length&&a(o.index()),"prev"==e&&n.length&&a(n.index())}var i=$(".section"),n=$(".page"),c=!1;$(window).on("wheel",function(e){var t=e.originalEvent.deltaY;0<t&&(o("next"),console.log(t)),t<0&&(o("prev"),console.log(t))}),$(window).on("keydown",function(e){var t=e.target.tagName.toLowerCase();if("input"!==t&&"textarea"!==t)switch(e.keyCode){case 38:o("prev");break;case 40:o("next")}}),$("[data-scroll-to]").on("click",function(e){e.preventDefault();var t=$(e.currentTarget).attr("data-scroll-to");a(t)}),new MobileDetect(window.navigator.userAgent).mobile()&&$("body").swipe({swipe:function(e,t){o("up"==t?"next":"prev")}})}(),function(){var c=document.querySelector(".video"),e=document.querySelector(".play"),t=(document.querySelector(".progress"),document.querySelector(".laut")),o=document.querySelector(".volume"),n=document.querySelector(".play-icon"),a=document.querySelector(".pause-icon"),i=document.querySelector(".mute-icon"),l=document.querySelector(".volume-icon"),r=document.querySelector(".video-icon"),s=document.querySelector(".curtimetext"),d=document.querySelector(".durtimetext");e.addEventListener("click",function(e){c.paused?(c.play(),n.style.opacity="0",a.style.opacity="1",r.style.opacity="0"):(c.pause(),a.style.opacity="0",n.style.opacity="1",r.style.opacity="1")}),c.addEventListener("click",function(e){c.paused?(c.play(),n.style.opacity="0",a.style.opacity="1",r.style.opacity="0"):(c.pause(),a.style.opacity="0",n.style.opacity="1",r.style.opacity="1")}),r.addEventListener("click",function(e){c.paused?(c.play(),n.style.opacity="0",a.style.opacity="1",r.style.opacity="0"):(c.pause(),a.style.opacity="0",n.style.opacity="1",r.style.opacity="1")}),t.addEventListener("click",function(e){c.muted?(c.muted=!1,o.value=100,l.style.opacity="1",i.style.opacity="0"):(c.muted=!0,o.value=0,l.style.opacity="0",i.style.opacity="1")}),o.addEventListener("mousemove",function(e){c.volume=o.value/100}),c.ontimeupdate=function(){console.log(c.duration),console.log(c.currentTime);var e=c.duration,t=c.currentTime;progress.value=100*t/e;var o=Math.floor(c.currentTime/60),n=Math.floor(c.currentTime-60*o),a=Math.floor(c.duration/60),i=Math.round(c.duration-60*a);n<10&&(n="0"+n);i<10&&(i="0"+i);s.innerHTML=o+":"+n,d.innerHTML=a+":"+i},progress.addEventListener("click",function(e){var t=this.offsetWidth,o=event.offsetX;this.value=100*o/t,c.pause(),c.currentTime=c.duration*(o/t),c.play()})}();