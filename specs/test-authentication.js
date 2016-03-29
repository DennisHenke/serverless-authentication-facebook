"use strict";

let config = require('serverless-authentication').config;
let auth = require('../lib');

describe('Facebook authentication', () => {
  describe('Test Facebook authentication', () => {
    it('tests signin without params', () => {
      let providerConfig = config('facebook');
      auth.signin(providerConfig, {}, (err, data) => {
        expect(err).to.be.null;
        expect(data.url).to.equal('https://www.facebook.com/dialog/oauth?client_id=fb-mock-id&redirect_uri=https://api-id.execute-api.eu-west-1.amazonaws.com/dev/callback/facebook');
      });
    });

    it('test signin with scope and state params', () => {
      let providerConfig = config('facebook');
      auth.signin(providerConfig, {scope: 'email', state: '123456'}, (err, data) => {
        expect(err).to.be.null;
        expect(data.url).to.equal('https://www.facebook.com/dialog/oauth?client_id=fb-mock-id&redirect_uri=https://api-id.execute-api.eu-west-1.amazonaws.com/dev/callback/facebook&scope=email&state=123456');
      });
    });
  });
});