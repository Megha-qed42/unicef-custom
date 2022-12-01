/**
 * Search JS
 */

import $ from 'jquery';

Drupal.behaviors.search = {
  attach() {
    $('.tabs-nav a').on('click', function functionNmae() {
      // Check for active
      $('.tabs-nav li').removeClass('active');
      $(this)
        .parent()
        .addClass('active');
      // Display active tab
      const currentTab = $(this).attr('href');
      $('.tabs-content .cards-block').hide();
      $(currentTab).show();
      return false;
    });
  },
};
