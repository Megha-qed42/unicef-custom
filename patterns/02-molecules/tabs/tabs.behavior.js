// Font Sizes
const textDefault = 'textSm-regular';
const textDefaultActive = 'textSm-bold';
const textLarge = 'textMd-regular';
const textLargeActive = 'textMd-bold';

// Active State Trigger function
function activeToggleHandler(tabItem, tabsList, activeClass, nonActiveClass) {
  tabsList.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabItemSizeValue =
        tabItem.classList.contains('container_1_light') ||
        tabItem.classList.contains('container_1_dark') ||
        tabItem.classList.contains('container_2')
          ? 'default_size'
          : 'default_size_padding';

      tabsList.forEach((t) => {
        t.classList.remove(
          activeClass,
          tabItem.classList.contains(tabItemSizeValue) ? textDefaultActive : textLargeActive
        );
        t.classList.add(
          nonActiveClass,
          tabItem.classList.contains(tabItemSizeValue) ? textDefault : textLarge
        );
        tab.classList.add(
          activeClass,
          tabItem.classList.contains(tabItemSizeValue) ? textDefaultActive : textLargeActive
        );
      });
    });
  });
}

Drupal.behaviors.single_tab = {
  attach: async function singleTab() {
    const tabsList = document.querySelectorAll('.list-none a');
    const tabItem = document.getElementById('single_tab');

    if (tabItem.classList.contains('underlined')) {
      await activeToggleHandler(tabItem, tabsList, 'underlined_active', 'underlined');
    } else if (tabItem.classList.contains('underlined_filled')) {
      await activeToggleHandler(tabItem, tabsList, 'underlined_filled_active', 'underlined_filled');
    } else if (tabItem.classList.contains('filled_light')) {
      await activeToggleHandler(tabItem, tabsList, 'filled_light_active', 'filled_light');
    } else if (tabItem.classList.contains('filled_dark')) {
      await activeToggleHandler(tabItem, tabsList, 'filled_dark_active', 'filled_dark');
    } else if (tabItem.classList.contains('container_1_light')) {
      await activeToggleHandler(tabItem, tabsList, 'container_1_light_active', 'container_1_light');
    } else if (tabItem.classList.contains('container_1_dark')) {
      await activeToggleHandler(tabItem, tabsList, 'container_1_dark_active', 'container_1_dark');
    } else if (tabItem.classList.contains('container_2')) {
      await activeToggleHandler(tabItem, tabsList, 'container_2_active', 'container_2');
    }
  },
};
