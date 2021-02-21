/**
 * This is an index of all modules so you can do multiple imports into a file with minimal markup.
 * @example `import {Home, WebService, SearchResultsWebService} from './modules';`
 * @module modules
 */

import Component from './classes/component';
import Browser from './classes/browser';
import URLBuilder from './classes/URLBuilder';
import URLParameterChecker from './classes/URLParameterChecker';
import Util from './classes/Util';

export {
  Component, Browser, URLBuilder, URLParameterChecker, Util,
};
