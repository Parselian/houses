'use-strict';

window.addEventListener('DOMContentLoaded', () => {

  const controlVideoplayer = () => {
    const playerWrap = document.querySelector('.video__mediaplayer'),
          player = playerWrap.querySelector('video'),
          playerBtn = playerWrap.querySelector('.video__mediaplayer-playbutton');

    playerWrap.addEventListener('click', e => {
      const target = e.target;

      if (target === playerBtn && player.paused) {
        player.play();
        playerBtn.style.display = 'none';
        player.style.cursor = 'pointer';
      } else {
        player.pause();
        playerBtn.style.display = 'unset';
        player.style.cursor = 'unset';
      }
    });
  };
  controlVideoplayer();

  const mapInit = () => {

    ymaps.ready(init);

    function init () {
      let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        center: [55.684183, 37.412783],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
      });

      let mapPlacemark = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [55.684183, 37.412783]
        }
      });

      myMap.geoObjects.add(mapPlacemark);
      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('routeButtonControl');
      myMap.controls.remove('rulerControl');

      myMap.behaviors.disable(['drag']);
    }

  };
  mapInit();
});