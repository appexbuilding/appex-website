import { GenericObject } from '@scripts/types';

/**
 * Class to build our URL ready for API results
 *
 * @export
 * @class URLBuilder
 */
export default class URLBuilder {
  /**
   * Builds a query string
   *
   * ```js
   * const query = URLBuilder.buildQuery({ test: "hello", another: 4 });
   * // -> query === '?test=hello&another=4'
   * ```
   *
   * @param params
   * @param includeEmpty Should the query include empty values
   * @returns string
   */
  static buildQuery(params: GenericObject = {}, includeEmpty = true): string {
    const queryString = Object.entries(params)
      .filter((value) => (includeEmpty ? true : Boolean(value[1])))
      .map(([key, value]) => `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}`)
      .join('&');

    return `?${queryString}`;
  }
}
