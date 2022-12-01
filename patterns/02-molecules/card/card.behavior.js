// Function to scroll image upward when card animate on scroll.

(function aos($, Drupal) {
  Drupal.behaviors.aosImage = {
    attach() {
      $('.aos-animate picture img').addClass('aosimage');
    },
  };
})(jQuery, Drupal);
