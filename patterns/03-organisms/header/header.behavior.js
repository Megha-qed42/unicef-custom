import $ from 'jquery';

Drupal.behaviors.header = {
  attach() {
    // Megamenu First Level click if has child item.
    /* eslint-disable */
    $(document).on('click', '.mega-menu-primary .navigation__item span.header-menu-item', function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();

      const target = $(e.target).next('.menu-link-contentmain');

      if (!target.is(':visible')) {
        $(e.target).next('.menu-link-contentmain').addClass('show-sub-menu');
        setTimeout(function () {
          $('body').addClass('scroll-freeze');
        }, 500);
      }
      else {
        $(e.target).next('.menu-link-contentmain').removeClass('show-sub-menu');
        $('body').removeClass('scroll-freeze');
      }
      $(this)
        .closest('li.navigation__item')
        .siblings('li.navigation__item')
        .find('> .menu-link-contentmain')
        .removeClass('show-sub-menu');
      $(this)
        .parent('li.navigation__item')
        .siblings('li.navigation__item')
        .removeClass('menu-active');
      $(this).parent('li.navigation__item').toggleClass('menu-active');
    });

    // on Mobile/iPad close drawer sub-menu of Branch navigation.
    if ($(window).width() < 1023) {
      $(
        '._branched-navigation .section-heading .intro-section__title, ._branched-navigation-with-card .section-heading .intro-section__title'
      ).on('click', function () {
        $(this).
          closest('li.navigation__item')
          .removeClass('menu-active');
      });
    }

    // Hamburger click
    $('.hamburger-icon').on('click', (e) => {
      e.stopImmediatePropagation();
      $('.header-menu-item-wrapper').toggleClass('display-header');
      $('button.ui-hamburger-02').toggleClass('header-active');
      $('.mega-menu-primary .navigation__item').removeClass('menu-active');
      $('body').toggleClass('header-open');
    });

    // Click outside to close menu
    const $menu = $('.header-menu-item-wrapper, .hamburger-icon');
    $(document).mouseup(e => {
      if (!$menu.is(e.target)
      && $menu.has(e.target).length === 0) {
        $('.header-menu-item-wrapper').removeClass('display-header');
        $('.mega-menu-primary .navigation__item').removeClass('menu-active');
        $('.menu-link-contentmain').removeClass('show-sub-menu');
        $('button.ui-hamburger-02').removeClass('header-active');
        $('body').removeClass('scroll-freeze header-open');
      }
    });

    // Search click
    $('.defaultheader .mobile-search-btn').on('click', () => {
      if ($('.mobile-search-btn').hasClass('active')) {
        $('.mobile-search-btn').removeClass('active');
        $('.mobile-search-input').slideUp();
      } else {
        $('.mobile-search-btn').addClass('active');
        $('.mobile-search-input').slideDown();
      }
    });
  },
};
