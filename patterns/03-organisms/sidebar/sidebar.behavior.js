/**
 * sidebar JS
 */

import $ from 'jquery';

Drupal.behaviors.sidebar = {
  attach(context) {
    // Sidebar Menu
    $('.sidebar__menu > li.navigation__item--has-children', context).on(
      'click',
      function functionNmae(e) {
        e.stopPropagation();
        $(this)
          .toggleClass('active')
          .siblings()
          .removeClass('active');
        $('.sub-menu > li.navigation__item--has-children.active', context).removeClass('active');
      }
    );

    // Sidebar Sub Menu
    $('.sub-menu > li.navigation__item--has-children', context).on('click', function functionNmae2(
      e
    ) {
      e.stopPropagation();
      $(this).toggleClass('active');
    });
  },
};
