/**
 * Modal JS
 */

import $ from 'jquery';

Drupal.behaviors.modal = {
  attach() {
    $('li :checkbox').on('click', function selectplan() {
      $(this)
        .parent()
        .parent()
        .toggleClass('bg-primary-100 checked');
    });
  },
};
