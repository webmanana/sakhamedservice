ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [62.032056, 129.726874],
            // Масштаб.
            zoom: 13
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
		}),
        myPlacemark = new ymaps.Placemark([62.038924, 129.724021], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            // balloonContentBody: "Содержимое <em>балуна</em> метки",
            // balloonContentFooter: "Подвал",
            // hintContent: "Хинт метки"
        }),
		myPlacemark2 = new ymaps.Placemark([62.033592, 129.758032], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            // balloonContentBody: "Содержимое <em>балуна</em> метки",
            // balloonContentFooter: "Подвал",
            // hintContent: "Хинт метки"
        }),
		myPlacemark3 = new ymaps.Placemark([62.023098, 129.722476], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            // balloonContentBody: "Содержимое <em>балуна</em> метки",
            // balloonContentFooter: "Подвал",
            // hintContent: "Хинт метки"
        });
		myMap.geoObjects.add(myPlacemark);
		myMap.geoObjects.add(myPlacemark2);
		myMap.geoObjects.add(myPlacemark3);
}
function setCenter () {
	// myPlacemark2.balloon.open();
	myMap.setZoom(16);
	myMap.panTo([62.033592, 129.758032], {
            // Задержка между перемещениями.
            delay: 1500
        });
	var d = document.getElementById("maps_toggle_1");
	var c = document.getElementById("maps_toggle_2");
	var b = document.getElementById("maps_toggle_3");
	d.className += " active";
	c.classList.remove("active");
	b.classList.remove("active");

}

function setBounds () {
	// myPlacemark.balloon.open();
	myMap.setZoom(16);
	myMap.panTo([62.038924, 129.724021], {
            // Задержка между перемещениями.
            delay: 1500
        });
	var d = document.getElementById("maps_toggle_1");
	var c = document.getElementById("maps_toggle_2");
	var b = document.getElementById("maps_toggle_3");
	c.className += " active";
	d.classList.remove("active");
	b.classList.remove("active");
}

function setTypeAndPan () {
	// myPlacemark3.balloon.open();
	myMap.setZoom(16);
	myMap.panTo([62.023098, 129.722476], {
            // Задержка между перемещениями.
            delay: 1500
        });
	var d = document.getElementById("maps_toggle_1");
	var c = document.getElementById("maps_toggle_2");
	var b = document.getElementById("maps_toggle_3");
	b.className += " active";
	c.classList.remove("active");
	d.classList.remove("active");

}
