/**
 * Openmoney API
 * Openmoney API
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Modification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Modification'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenmoneyApi) {
      root.OpenmoneyApi = {};
    }
    root.OpenmoneyApi.CurrenciesResponse = factory(root.OpenmoneyApi.ApiClient, root.OpenmoneyApi.Modification);
  }
}(this, function(ApiClient, Modification) {
  'use strict';




  /**
   * The CurrenciesResponse model module.
   * @module model/CurrenciesResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CurrenciesResponse</code>.
   * @alias module:model/CurrenciesResponse
   * @class
   * @param currency {String} 
   * @param currencyNamespace {String} 
   * @param stewards {Array.<String>} 
   */
  var exports = function(currency, currencyNamespace, stewards) {
    var _this = this;

    _this['currency'] = currency;
    _this['currency_namespace'] = currencyNamespace;



    _this['stewards'] = stewards;
  };

  /**
   * Constructs a <code>CurrenciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrenciesResponse} obj Optional instance to populate.
   * @return {module:model/CurrenciesResponse} The populated <code>CurrenciesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('currency_namespace')) {
        obj['currency_namespace'] = ApiClient.convertToType(data['currency_namespace'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Integer');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('modifications')) {
        obj['modifications'] = ApiClient.convertToType(data['modifications'], [Modification]);
      }
      if (data.hasOwnProperty('stewards')) {
        obj['stewards'] = ApiClient.convertToType(data['stewards'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} currency_namespace
   */
  exports.prototype['currency_namespace'] = undefined;
  /**
   * timestamp in milliseconds since epoch
   * @member {Integer} created
   */
  exports.prototype['created'] = undefined;
  /**
   * stewardname of steward who made change
   * @member {String} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {Array.<module:model/Modification>} modifications
   */
  exports.prototype['modifications'] = undefined;
  /**
   * @member {Array.<String>} stewards
   */
  exports.prototype['stewards'] = undefined;



  return exports;
}));


