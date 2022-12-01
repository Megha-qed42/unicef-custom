/**
 * Header navigation Tabs JS
 */
import $ from 'jquery';

Drupal.behaviors.subheader = {
  attach() {
    // For Storybook
    $(document).on('click', '._branched-navigation .primary-col li a', (e) => {
      e.preventDefault();
      $(this)
        .parent('li')
        .addClass('current active');
      $('._branched-navigation .secondary-col').addClass('branch-menu-open');
    });

    $(document).on('click', '._branched-navigation .block-title', () => {
      $('li.sub-menu-item').removeClass('current active');
      $('._branched-navigation .secondary-col').removeClass('branch-menu-open');
    });
  },
};
