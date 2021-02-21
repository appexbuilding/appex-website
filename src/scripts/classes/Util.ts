/**
 * Various Utility Methods
 * @class Util
 */
export default class Util {
  /**
   * To Boolean. Converts "true", "false", "True", "False", "TRUE", etc to a boolean, else false;
   *
   * @example Util.toBoolean("TRUE"); // true
   * @param val
   * @returns {boolean}
   */
  static toBoolean(val: string): boolean {
    switch (val.toLowerCase().trim()) {
      case 'true':
      case 'yes':
      case '1':
        return true;
      case 'false':
      case 'no':
      case '0':
      case null:
        return false;
      default:
        return Boolean(val);
    }
  }
}
