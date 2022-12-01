/**
 * Breadcrumb JS
 */
import $ from 'jquery';

Drupal.behaviors.breadcrumb = {
  attach(context, settings) {
    const breadcrumb = $('.breadcrumb');
    if (
      breadcrumb.children().length >= 4 &&
      settings.breadcrumb.breadcrumb_variation_options === 'collapse'
    ) {
      const detachedChildren = breadcrumb
        .children()
        .slice(3, -1)
        .detach();
      const expandBreadcrumb = $(
        '<li><svg class="fill-current h-4 w-4 mx-2  svg"><use xlink:href="images/spritemap.svg#chevronRight"></use><use xlink:href="/themes/custom/unicef_vf/dist/app-drupal/images/spritemap.svg#chevronRight"></use></svg><a class="dotitem ml-1 mr-2" href="" title="Show all breadcrumbs"><strong>. ' +
          '. ' +
          '.</strong></a><span class="dotitemwrap"></span></li>'
      );
      $(document).on('click', (event) => {
        const $trigger = $('.breadcrumb');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $('.dotitemwrap').removeClass('active');
          $('.dotitemwrap')
            .parents('li')
            .removeClass('activedot');
        }
      });
      $(document).on('click', '.dotitem', (event) => {
        event.preventDefault();
        $('.dotitemwrap').append(detachedChildren);
        $('.dotitemwrap').toggleClass('active');
        $('.dotitemwrap')
          .parents('li')
          .toggleClass('activedot');
      });
      breadcrumb
        .children()
        .last()
        .before(expandBreadcrumb);
    }
  },
};
