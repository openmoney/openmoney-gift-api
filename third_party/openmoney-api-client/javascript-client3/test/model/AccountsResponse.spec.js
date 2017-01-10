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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenmoneyApi);
  }
}(this, function(expect, OpenmoneyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenmoneyApi.AccountsResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountsResponse', function() {
    it('should create an instance of AccountsResponse', function() {
      // uncomment below and update the code to test AccountsResponse
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be.a(OpenmoneyApi.AccountsResponse);
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountNamespace (base name: "account_namespace")', function() {
      // uncomment below and update the code to test the property accountNamespace
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyNamespace (base name: "currency_namespace")', function() {
      // uncomment below and update the code to test the property currencyNamespace
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property modifications (base name: "modifications")', function() {
      // uncomment below and update the code to test the property modifications
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property stewards (base name: "stewards")', function() {
      // uncomment below and update the code to test the property stewards
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "publicKey")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instane = new OpenmoneyApi.AccountsResponse();
      //expect(instance).to.be();
    });

  });

}));
