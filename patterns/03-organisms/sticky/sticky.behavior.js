import $ from 'jquery';
import Splide from '@splidejs/splide';

Drupal.behaviors.stickyComponent = {
  attach(context) {
    /**
     * IF element is in inViewport.
     *
     * Returns a callback function with an argument holding
     * the current amount of px an element is visible in viewport
     * (The min returned value is 0 (element outside of viewport)
     * The max returned value is the element height + borders)
     */
    /* eslint-disable */
    (function(win) {
      $.fn.inViewport = function(cb) {
        return this.each(function(i, el) {
          function visPx() {
            const elH = $(el).outerHeight();
            const H = $(win).height();
            const r = el.getBoundingClientRect();
            const t = r.top;
            const b = r.bottom;
            return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : b < H ? b : H));
          }
          visPx();
          $(win).on('resize scroll', visPx);
        });
      };
    })(window);

    $(window)
      .on('resize', function() {
        if ($(window).width() >= 1024) {
          // Sticky component - Single image
          // If component content 2 portion in the viewport.
          $('.sticky-single-image-container .list-wrapper .list-item-sticky', context).inViewport(
            function(px) {
              const h = $(this).height();
              const isHalfVisible = px >= h / 2;
              if (isHalfVisible === true) {
                $(this)
                  .find('.scroll-animation-box')
                  .fadeIn(800);
              } else {
                $(this)
                  .find('.scroll-animation-box')
                  .fadeOut(500);
              }
            }
          );

          // Sticky component - Vertical Multiple image and data
          // If component content 2.05 portion in the viewport.
          $(
            '.sticky-vertical-multiple-image-container .list-wrapper .list-item-sticky',
            context
          ).inViewport(function(px) {
            const h = $(this).height();
            const isHalfVisible = px >= h / 2.05;

            if (isHalfVisible === true) {
              const contentItemIndex = $(this).index();

              $(this)
                .find('.scroll-animation-box')
                .fadeIn(500);

              $(
                '.sticky-vertical-multiple-image-container .sticky-image-wrapper .list-item-sticky'
              ).each(function() {
                const imageItemIndex = $(this).index();

                if (contentItemIndex === imageItemIndex) {
                  $(this).addClass('active-image');
                  $(this)
                    .find('.image-el, picture img')
                    .css({
                      opacity: 1,
                    });
                } else {
                  $(this).removeClass('active-image');
                  $(this)
                    .find('.image-el, picture img')
                    .css({
                      opacity: 0,
                    });
                }
              });
            } else {
              $(this)
                .find('.scroll-animation-box')
                .fadeOut(500);
            }
          });

          // Sticky component - Slim thumbnails Multiple image
          // If component content 2.05 portion in the viewport.
          $(
            '.sticky-slim-thumbnails-container .list-wrapper .list-item-sticky',
            context
          ).inViewport(function(px) {
            const h = $(this).height();
            const isHalfVisible = px >= h / 2.05;

            if (isHalfVisible === true) {
              const contentItemIndex = $(this).index();

              $(this)
                .find('.scroll-animation-box')
                .fadeIn(800);

              $('.sticky-slim-thumbnails-container .sticky-image-wrapper .list-item-sticky').each(
                function() {
                  const imageItemIndex = $(this).index();

                  if (contentItemIndex === imageItemIndex) {
                    $(this).addClass('active-image');
                  } else {
                    $(this).removeClass('active-image');
                  }
                }
              );
            } else {
              $(this)
                .find('.scroll-animation-box')
                .fadeOut(500);
            }
          });

          // Sticky component - Vertical Multiple fraction image and data
          // If component content 2.05 portion in the viewport.
          $(
            '.sticky-vertical-multiple-fraction-container .sticky-image-wrapper .list-item-sticky',
            context
          ).inViewport(function(px) {
            const h = $(this).height();
            const isHalfVisible = px >= h / 2.05;

            if (isHalfVisible === true) {
              $(this).addClass('active-image');

              const contentItemIndex = $(this).index();

              $(
                '.sticky-vertical-multiple-fraction-container .scroll-text-wrapper .list-item-sticky'
              ).each(function() {
                const imageItemIndex = $(this).index();

                if (contentItemIndex === imageItemIndex) {
                  $(this).addClass('active-data');
                } else {
                  $(this).removeClass('active-data');
                }
              });
            } else {
              $(this).removeClass('active-image');
            }
          });

          // Horizontal sticky component
          const spaceHolder = document.querySelector('.space-holder', context);
          const horizontal = document.querySelector('.horizontal-el', context);

          function calcDynamicHeight(ref) {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const objectWidth = ref.scrollWidth;
            return objectWidth - vw + vh + 136; // 136 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
          }
          spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

          window.addEventListener('scroll', () => {
            const sticky = document.querySelector('.sticky-el', context);
            horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
          });

          window.addEventListener('resize', () => {
            spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
          });
        } else {
          console.log('Else...');
          // Slider on mobile - Vertical Multiple image and data
          const stickyMultipleImageSlider = document.querySelectorAll(
            '.sticky-vertical-multiple-image-container'
          );
          stickyMultipleImageSlider.forEach(async () => {
            const main = new Splide('#vertical-multiple-image', {
              type: 'slide',
              rewind: false,
              pagination: false,
              arrows: false,
              autoplay: false,
              perPage: 1,
              perMove: 1,
            });

            const thumbnails = new Splide('#vertical-multiple-data', {
              gap: 20,
              rewind: false,
              pagination: false,
              cover: true,
              isNavigation: true,
              arrows: true,
              autoplay: false,
              focus: 'center',
              perPage: 1,
              perMove: 1,
              drag: false,
            }).mount();

            main.sync(thumbnails).mount();
          });

          // Slider on mobile - Slim thumbnails Multiple image
          const stickySlimThumbnailSlider = document.querySelectorAll(
            '.sticky-slim-thumbnails-container'
          );
          stickySlimThumbnailSlider.forEach(async () => {
            const main = new Splide('#slim-thumbnails-image', {
              type: 'slide',
              rewind: false,
              pagination: false,
              arrows: false,
              autoplay: false,
              perPage: 1,
              perMove: 1,
            });

            const thumbnails = new Splide('#slim-thumbnails-data', {
              gap: 20,
              rewind: false,
              pagination: false,
              cover: true,
              isNavigation: true,
              arrows: true,
              autoplay: false,
              perPage: 1,
              perMove: 1,
              drag: false,
            }).mount();

            main.sync(thumbnails).mount();
          });

          // Slider on mobile - Vertical Multiple fraction image and data
          const stickyMultipleFractionSlider = document.querySelectorAll(
            '.sticky-vertical-multiple-fraction-container'
          );
          stickyMultipleFractionSlider.forEach(async () => {
            const main = new Splide('#vertical-multiple-fraction-image', {
              type: 'slide',
              rewind: false,
              pagination: false,
              arrows: false,
              autoplay: false,
              perPage: 1,
              perMove: 1,
            });

            const thumbnails = new Splide('#vertical-multiple-fraction-data', {
              gap: 20,
              rewind: false,
              pagination: false,
              cover: true,
              isNavigation: true,
              arrows: true,
              autoplay: false,
              perPage: 1,
              perMove: 1,
              drag: false,
            }).mount();

            main.sync(thumbnails).mount();
          });
        }
      })
      .trigger('resize');
  },
};
