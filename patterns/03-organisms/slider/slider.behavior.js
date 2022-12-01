import $ from 'jquery';
import Splide from '@splidejs/splide';

function uniqueSliderId(slider) {
  const randomNumber = Math.random();
  const newSliderId = `splide-track-${randomNumber}`;
  slider.attributes.id.ownerElement.firstElementChild.id = newSliderId;

  const ulList = document.querySelectorAll('.splide__list');
  ulList.forEach((list) => {
    const listChildren = list.children;
    [...listChildren].forEach((child) => {
      const sliderId = `splide-slide-${Math.random()}`;
      child.id = sliderId;
    });
  });

  const arrowsList = document.querySelectorAll('.splide__arrows .container');
  arrowsList.forEach((arrowList) => {
    const arrowListChildren = arrowList.children;
    [...arrowListChildren].forEach((child) => {
      const value = typeof child.attributes[1] === 'undefined';
      if (value === false) {
        const newArrowControls =
          child.attributes[1].nodeValue === 'splide-track' ? `splide-track-${randomNumber}` : '';

        child.attributes[1].nodeValue = newArrowControls;
      }
    });
  });
}

Drupal.behaviors.slider = {
  attach() {
    const dir = $('html').attr('dir');
    if (dir === 'rtl') {
      window.dirVal = 'rtl';
    } else {
      window.dirVal = 'ltr';
    }
    // No pagination - Slider
    const noPagination = document.querySelectorAll('.no-pagination');
    noPagination.forEach(async (slider) => {
      if (!slider.classList.contains('splide--processed-0')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const slidesOnTablet = slider.attributes['data-slides-on-tablet'].value;
        const slidesOnMobile = slider.attributes['data-slides-on-mobile'].value;
        const slideSpaceRight = slider.attributes['data-slide-space-right'].value;
        const slideSpaceLeft = slider.attributes['data-slide-space-left'].value;
        const slideArrow = slider.attributes['data-arrows'].value;
        const slidesType = slider.attributes['data-splide'].value;
        const slideFocus = slider.attributes['data-slide-focus'].value;
        const splide = new Splide(slider, {
          type: slidesType,
          direction: dirVal, // eslint-disable-line
          arrows: !!slideArrow,
          pagination: false,
          perPage: slidesPerView,
          perMove: 1,
          autoplay: autoplay === '1',
          focus: slideFocus === 'center' ? 'center' : false,
          interval: 3000,
          rewind: false,
          padding: {
            left: slideSpaceLeft,
            right: slideSpaceRight,
          },
          gap: 0,
          breakpoints: {
            1023: {
              gap: 0,
              perPage: slidesOnTablet,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
            767: {
              gap: 0,
              perPage: slidesOnMobile,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed-0');
        await uniqueSliderId(slider);
      }
    });

    // Dot pagination - Slider
    const dotPagination = document.querySelectorAll('.dot-pagination');
    dotPagination.forEach(async (slider) => {
      if (!slider.classList.contains('splide--processed-1')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const slidesOnTablet = slider.attributes['data-slides-on-tablet'].value;
        const slidesOnMobile = slider.attributes['data-slides-on-mobile'].value;
        const slideSpaceRight = slider.attributes['data-slide-space-right'].value;
        const slideSpaceLeft = slider.attributes['data-slide-space-left'].value;
        const slideArrow = slider.attributes['data-arrows'].value;
        const slidesType = slider.attributes['data-splide'].value;
        const slideFocus = slider.attributes['data-slide-focus'].value;
        const splide = new Splide(slider, {
          type: slidesType,
          direction: dirVal, // eslint-disable-line
          arrows: !!slideArrow,
          pagination: true,
          perPage: slidesPerView,
          perMove: 1,
          autoplay: autoplay === '1',
          focus: slideFocus === 'center' ? 'center' : false,
          interval: 3000,
          rewind: false,
          padding: {
            left: slideSpaceLeft,
            right: slideSpaceRight,
          },
          gap: 0,
          breakpoints: {
            1023: {
              gap: 0,
              perPage: slidesOnTablet,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
            767: {
              gap: 0,
              perPage: slidesOnMobile,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed-1');
        await uniqueSliderId(slider);
      }
    });

    // Line pagination - Slider
    const linePagination = document.querySelectorAll('.line-pagination');
    linePagination.forEach(async (slider) => {
      if (!slider.classList.contains('splide--processed-2')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const slidesOnTablet = slider.attributes['data-slides-on-tablet'].value;
        const slidesOnMobile = slider.attributes['data-slides-on-mobile'].value;
        const slideSpaceRight = slider.attributes['data-slide-space-right'].value;
        const slideSpaceLeft = slider.attributes['data-slide-space-left'].value;
        const slideArrow = slider.attributes['data-arrows'].value;
        const slidesType = slider.attributes['data-splide'].value;
        const slideFocus = slider.attributes['data-slide-focus'].value;
        const splide = new Splide(slider, {
          type: slidesType,
          direction: dirVal, // eslint-disable-line
          arrows: !!slideArrow,
          pagination: true,
          perPage: slidesPerView,
          perMove: 1,
          autoplay: autoplay === '1',
          focus: slideFocus === 'center' ? 'center' : false,
          interval: 3000,
          rewind: false,
          padding: {
            left: slideSpaceLeft,
            right: slideSpaceRight,
          },
          gap: 0,
          breakpoints: {
            1023: {
              gap: 0,
              perPage: slidesOnTablet,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
            767: {
              gap: 0,
              perPage: slidesOnMobile,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed-2');
        await uniqueSliderId(slider);
      }
    });

    // Number dash pagination - Slider
    const numberDashPagination = document.querySelectorAll('.number-dash-pagination');
    numberDashPagination.forEach((slider) => {
      if (!slider.classList.contains('splide--processed-3')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const slidesOnTablet = slider.attributes['data-slides-on-tablet'].value;
        const slidesOnMobile = slider.attributes['data-slides-on-mobile'].value;
        const slideSpaceRight = slider.attributes['data-slide-space-right'].value;
        const slideSpaceLeft = slider.attributes['data-slide-space-left'].value;
        const slideArrow = slider.attributes['data-arrows'].value;
        const slidesType = slider.attributes['data-splide'].value;
        const slideFocus = slider.attributes['data-slide-focus'].value;
        const splide = new Splide(slider, {
          type: slidesType,
          direction: dirVal, // eslint-disable-line
          arrows: !!slideArrow,
          pagination: true,
          perPage: slidesPerView,
          perMove: 1,
          autoplay: autoplay === '1',
          focus: slideFocus === 'center' ? 'center' : false,
          interval: 3000,
          rewind: false,
          padding: {
            left: slideSpaceLeft,
            right: slideSpaceRight,
          },
          gap: 0,
          breakpoints: {
            1023: {
              gap: 0,
              perPage: slidesOnTablet,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
            767: {
              gap: 0,
              perPage: slidesOnMobile,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed-3');
      }
    });

    // Number fraction pagination - Slider
    const numberFractionPagination = document.querySelectorAll('.number-fraction-pagination');
    numberFractionPagination.forEach(async (slider) => {
      if (!slider.classList.contains('splide--processed-4')) {
        const autoplay = slider.attributes['data-autoplay'].value;
        const slidesPerView = slider.attributes['data-slides-per-view'].value;
        const slidesOnTablet = slider.attributes['data-slides-on-tablet'].value;
        const slidesOnMobile = slider.attributes['data-slides-on-mobile'].value;
        const slideSpaceRight = slider.attributes['data-slide-space-right'].value;
        const slideSpaceLeft = slider.attributes['data-slide-space-left'].value;
        const slideArrow = slider.attributes['data-arrows'].value;
        const slidesType = slider.attributes['data-splide'].value;
        const slideFocus = slider.attributes['data-slide-focus'].value;
        const splide = new Splide(slider, {
          type: slidesType,
          direction: dirVal, // eslint-disable-line
          arrows: !!slideArrow,
          pagination: false,
          perPage: slidesPerView,
          perMove: 1,
          autoplay: autoplay === '1',
          focus: slideFocus === 'center' ? 'center' : false,
          interval: 3000,
          rewind: false,
          padding: {
            left: slideSpaceLeft,
            right: slideSpaceRight,
          },
          gap: 0,
          breakpoints: {
            1023: {
              gap: 0,
              perPage: slidesOnTablet,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
            767: {
              gap: 0,
              perPage: slidesOnMobile,
              perMove: 1,
              padding: {
                left: '0',
                right: '0',
              },
            },
          },
        });
        splide.mount();
        slider.classList.add('splide--processed-4');
        if (slider.classList.contains('has-counter')) {
          // eslint-disable-next-line func-names
          splide.on('move autoplay', function() {
            // eslint-disable-next-line func-names
            setTimeout(function() {
              const slideIndex = slider.querySelector('.splide__slide.is-visible').attributes[
                'data-slide-number'
              ].value;
              const currentSlide = slider.querySelector('.splide__slide-index');
              currentSlide.innerHTML = slideIndex;
            }, 500);
          });
        }
        await uniqueSliderId(slider);
      }
    });

    // Thumbnail sync - Slider
    const thumbnailSlider = document.querySelectorAll('.thumbnail-sync-slider');
    thumbnailSlider.forEach(async (slider) => {
      const autoplay = slider.attributes['data-autoplay'].value;

      const main = new Splide('.main-slider .carousel-main-slider', {
        type: 'slide',
        rewind: true,
        direction: dirVal, // eslint-disable-line
        pagination: false,
        arrows: false,
        autoplay: autoplay === '1',
        perPage: 1,
        perMove: 1,
      });

      const thumbnails = new Splide('.thumbnail-slider .carousel-thumbnail-slider', {
        fixedWidth: 280,
        fixedHeight: 140,
        direction: dirVal, // eslint-disable-line
        gap: 20,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        arrows: true,
        autoplay: autoplay === '1',
        focus: 'center',
        breakpoints: {
          767: {
            fixedWidth: 120,
            fixedHeight: 60,
            gap: 8,
            arrows: false,
          },
        },
      }).mount();

      main.sync(thumbnails).mount();
    });

    // Pause Video if navigate to prev/next slide - Splide slider.
    /* eslint-disable */
    $('.splide__arrow').on('click', function() {
      $('.splide__slide').each(function() {
        $(this)
          .find('.carousel-video video')
          .trigger('pause');
      });
    });
  },
};
