/**
 * nlevelmenu JS
 */
import $ from 'jquery';

/* eslint-disable */
function menuJS() {
  if ($(window).width() >= 992) {
    $('li.menu-level-1').each(() => {
      $(this).on('hover', () => $(this).toggleClass('hovered'));
    });
  } else {    
    $('li.menu-level-1').removeClass('hovered');
    $("li.menu-level-1").each(function () {
      $(this).find('.svg').click(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).next('ul.level2').slideUp();
        } else {
          $("li.menu-level-1 .svg").removeClass('active');
          $('ul.level2').slideUp();
          $(this).addClass('active');
          $(this).next('ul.level2').slideDown();
        }
      });
    });   
  }
}

Drupal.behaviors.nlevelmenu = {
  attach() {
    menuJS();
  },
};
