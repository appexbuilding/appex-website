import { forEach } from 'lodash-es';
import { Component } from '@scripts/modules';

/**
 * UIKit Accordions
 *
 * @class LazyLoading
 * @extends {Component}
 */
class Accordions extends Component {
  /**
   * Creates an instance of Accordions.
   *
   * @memberof Accordions
   */
  constructor() {
    super('C01');

    if (super.exists()) {
      const elements = document.querySelectorAll('.accordion');

      forEach(elements, (elm) => {
        if (elm) {
          window.UIkit.accordion(elm);
        }
      });
    }
  }
}

export default Accordions;
