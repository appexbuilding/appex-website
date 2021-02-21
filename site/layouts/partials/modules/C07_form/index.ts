// @ts-ignore
import Pristine from 'pristinejs/dist/pristine';
import { Component } from '@scripts/modules';
import { forEach } from 'lodash-es';

/**
 * PristineJS Forms
 *
 * @class Forms
 * @extends {Component}
 */
class Form extends Component {
  constructor() {
    super('C07');

    if (super.exists()) {
      const self = this;

      forEach(self.getElements(), (elm) => {
        if (elm) {
          const pristine = new Pristine(elm, self.defaultConfig);

          const files:NodeListOf<HTMLInputElement> = elm.querySelectorAll('[type="file"]');
          files.forEach((file) => {
            pristine.addValidator(
              file,
              // eslint-disable-next-line func-names
              function () {
                // @ts-ignore
                const t:any = this;
                if (!t.files[0]) {
                  return true;
                }
                // 5000000 = 5mb
                return !(t.files[0].size > t.maxLength);
              },
              `File is too big, must be smaller than ${file.maxLength / 1000000}MB`,
              2,
              false,
            );
          });

          elm.addEventListener('submit', (e) => {
            // check if the form is valid
            const valid = pristine.validate();

            console.log('pristine.getErrors():', pristine.getErrors());

            if (!valid) {
              e.preventDefault();
            }
          });
        }
      });
    }
  }

  get defaultConfig() {
    return {
      // class of the parent element where the error/success class is added
      classTo: 'uk-form-controls',
      errorClass: 'uk-text-danger',
      successClass: 'uk-text-success',
      // class of the parent element where error text element is appended
      errorTextParent: 'uk-form-controls',
      // type of element to create for the error text

      errorTextTag: 'div',
      // class of the error text element
      errorTextClass: 'uk-text-danger',
    };
  }
}

export default new Form();
