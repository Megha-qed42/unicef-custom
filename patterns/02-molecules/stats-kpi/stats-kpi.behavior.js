/* eslint-disable */

import counterUp from 'counterup2';

require('waypoints/lib/noframework.waypoints.js');

Drupal.behaviors.statsKpi = {
  attach() {
    Array.from(document.querySelectorAll('.counter')).forEach((element) => {
      // handle "element"
      new Waypoint({
        element: element,
        handler: function() {
          counterUp(element, {
            duration: 2000,
            delay: 16,
          });
          this.destroy();
        },
        offset: 'bottom-in-view',
      });
    });
  },
};
