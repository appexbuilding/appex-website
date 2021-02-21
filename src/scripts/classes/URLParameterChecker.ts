import { GenericObject } from '@scripts/types';

/**
 * Class to return our URL parameters if there is any
 * If a filter (lowercase) is passed it,
 * then we don"t want to force lowercase as an output
 *
 * @export
 * @class URLParameterChecker
 */
export default class URLParameterChecker {
  /**
   * Converts the document search query to a key/value pair
   *
   * ```js
   * const query = URLParameterChecker.getParams();
   * // query === '?test=hello&another=4'
   * // -> { test: 'hello', another: '4' }
   * ```
   *
   * @param search query to reconstruct
   * @param applyLowercase if the value should be lowercased
   * @returns GenericObject
   */
  static getParams(search = document.location.search, applyLowercase = false): GenericObject {
    const query = /^[?#]/.test(search) ? search.slice(1) : search;

    return query.split('&').reduce((acc, cur) => {
      const [key, value] = cur.split('=');

      if (!value) {
        return acc;
      }

      const filteredValue = applyLowercase ? value.toLowerCase() : value;

      return {
        ...acc,
        [key]: decodeURIComponent(filteredValue.replace(/\+/g, ' ')),
      };
    }, {});
  }
}
