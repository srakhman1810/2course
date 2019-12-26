// карты 
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


