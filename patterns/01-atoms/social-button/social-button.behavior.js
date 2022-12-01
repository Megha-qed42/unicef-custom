import $ from 'jquery';

Drupal.behaviors.socialButton = {
  attach() {
    $('.bg-facebookBlue').on('hover', () => {
      $('.bg-facebookBlue .default-icon').toggleClass('hidden');
      $('.bg-facebookBlue .hover-icon').toggleClass('show-icon');
    });
    $('.bg-black').on('hover', () => {
      $('.bg-black .default-icon').toggleClass('hidden');
      $('.bg-black .hover-icon').toggleClass('show-icon');
    });
  },
};
