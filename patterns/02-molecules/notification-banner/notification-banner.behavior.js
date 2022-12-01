/**
 * Notification Banner JS
 */
import $ from 'jquery';

Drupal.behaviors.notification = {
  attach() {
    $('.notification_wrapper .close').on('click', function closeNotification() {
      $(this)
        .parents('.notification_wrapper')
        .fadeOut('slow');
    });
  },
};
