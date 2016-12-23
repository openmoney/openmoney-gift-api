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
    define(['ApiClient', 'model/AesEncryption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AesEncryption'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenmoneyApi) {
      root.OpenmoneyApi = {};
    }
    root.OpenmoneyApi.EncryptedJournals = factory(root.OpenmoneyApi.ApiClient, root.OpenmoneyApi.AesEncryption);
  }
}(this, function(ApiClient, AesEncryption) {
  'use strict';




  /**
   * The EncryptedJournals model module.
   * @module model/EncryptedJournals
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>EncryptedJournals</code>.
   * @alias module:model/EncryptedJournals
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>EncryptedJournals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EncryptedJournals} obj Optional instance to populate.
   * @return {module:model/EncryptedJournals} The populated <code>EncryptedJournals</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('algorithm')) {
        obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
      }
      if (data.hasOwnProperty('publicKeyEncryptedSymetricKey')) {
        obj['publicKeyEncryptedSymetricKey'] = ApiClient.convertToType(data['publicKeyEncryptedSymetricKey'], 'String');
      }
      if (data.hasOwnProperty('initializationVector')) {
        obj['initializationVector'] = ApiClient.convertToType(data['initializationVector'], 'String');
      }
      if (data.hasOwnProperty('encryptedJournal')) {
        obj['encryptedJournal'] = AesEncryption.constructFromObject(data['encryptedJournal']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} algorithm
   */
  exports.prototype['algorithm'] = undefined;
  /**
   * @member {String} publicKeyEncryptedSymetricKey
   */
  exports.prototype['publicKeyEncryptedSymetricKey'] = undefined;
  /**
   * @member {String} initializationVector
   */
  exports.prototype['initializationVector'] = undefined;
  /**
   * @member {module:model/AesEncryption} encryptedJournal
   */
  exports.prototype['encryptedJournal'] = undefined;



  return exports;
}));


