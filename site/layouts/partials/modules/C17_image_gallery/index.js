import {Component} from "@scripts/modules";
import {map, forEach} from "lodash-es";

/**
 * ImageGallery
 *
 * @class ImageGallery
 * @extends {Component}
 */
class ImageGallery extends Component {
  /**
   * Inits slideshow, fixing weird slideshow first image not showing.
   *
   */
  constructor() {
    super("C17");
    if (super.exists()) {
      map(super.getElements(), (el) => {
        this.element = el;
        window.UIkit.slideshow(this.element).show(0);
      });
    }
  }
}

// export default
export default new ImageGallery();
