'use-strict';

window.addEventListener('DOMContentLoaded', () => {

  const toggleBurgerMenu = () => {
    const burger = document.querySelector('.burger'),
          burgerBtn = burger.querySelector('.burger__button');

    burger.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.burger__button') || target.closest('.burger__menu-link')) {
        burger.classList.toggle('burger_show');
        burgerBtn.classList.toggle('burger__button_show');
      }
    });
  };
  toggleBurgerMenu();

  const smoothAnchorScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };
  smoothAnchorScroll();

  const sliderCarousel = (wrap) => {
    const slider = document.querySelector(wrap),
          sliderWrap = slider.querySelector('.slider__wrap'),
          slides = sliderWrap.querySelectorAll('img');

    let counter = 0;

    slider.addEventListener('click', (e) => {
      const target = e.target,
            scrolledWidth = slides[0].getBoundingClientRect().width + 30;


      if (target.closest('.slider__arrow_right')) {
        if (counter < slides.length - 3) {
          counter++;

          sliderWrap.style.transform = `translateX(-${scrolledWidth * counter}px)`;
        } else if (counter === slides.length - 3) {
          counter = 0;
          sliderWrap.style.transform = 'translateX(0)';
        }
      } else if (target.closest('.slider__arrow_left')) {
        if (counter > 0) {
          counter--;

          sliderWrap.style.transform = `translateX(${scrolledWidth * counter}px)`;
        } else if (counter === 0) {
          counter = slides.length - 3;
          sliderWrap.style.transform = `translateX(-${scrolledWidth * counter}px)`;
        }
      }
      console.log(counter);
    })
    
  };
  sliderCarousel('.projects-slider');
  sliderCarousel('.projects-slider_2');

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

  const activateAccordeon = () => {
    const faqWrap = document.querySelector('.faq__wrap');

    faqWrap.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.faq__wrap-question')) {
        target.nextElementSibling.classList.toggle('faq__wrap-answer_show');
      }
    });
  };
  activateAccordeon();


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