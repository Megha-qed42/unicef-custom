import $ from 'jquery';

Drupal.behaviors.accordion = {
  attach() {
    const accItem = document.querySelectorAll('.accordion-item-inner');
    const accHD = document.querySelectorAll('.accordion-item-inner .ac-title');

    function toggleItem(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const itemClass = this.parentNode.className;
      for (let i = 0; i < accItem.length; i += 1) {
        accItem[i].className = 'accordion-item-inner closed';
      }
      this.parentNode.className = 'accordion-item-inner opened';
      if (itemClass === 'accordion-item-inner opened') {
        this.parentNode.className = 'accordion-item-inner closed';
      }
    }

    for (let i = 0; i < accHD.length; i += 1) {
      accHD[i].addEventListener('click', toggleItem, false);
    }

    $(document).on('click', '.accordion-item-inner .ac-title', () => {
      if (
        $(this)
          .closest('.accordion-item-inner')
          .hasClass('opened')
      ) {
        $(this)
          .find('.ac-accessibilty-txt')
          .text('click to close accordion');
      } else {
        $(this)
          .find('.ac-accessibilty-txt')
          .text('click to open accordion');
      }
    });
  },
};
