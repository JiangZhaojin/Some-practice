import Popover from './src/main';
import directive from './src/directive';
import Vue from 'vue';

Vue.directive('popover', Popover);

Popover.install = function (Vue) {
  Vue.directive('popover', Popover);
  Vue.component(Popover.name, Popover);
}

Popover.directive = directive;

export default Popover;