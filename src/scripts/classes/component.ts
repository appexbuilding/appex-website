import { isElement, head } from 'lodash-es';

type Elements = NodeListOf<Element>;

/**
 * Component Super Class
 * @class Component
 */
export default class Component {
  private componentId: string;

  private elements: Elements;

  /**
   * Creates an instance of Component.
   * @param {string} id The ID of the component.
   *
   * @memberof Component
   */
  constructor(id: string) {
    this.componentId = id;
    this.elements = document.querySelectorAll(`[data-id="${id.toUpperCase()}"]`);
  }

  /**
   * Tests for the existance of a component/s.
   *
   * @returns {boolean} If the element exists.
   * @memberof Component
   */
  exists(): boolean {
    return isElement(head(this.elements));
  }

  /**
   * @returns {NodeList|*}
   * @constructor
   */
  getElements(): Elements {
    return this.elements;
  }
}
