'use strict';
 require("!style!css!./style.css");
require('./scss/main.scss');

const path = require('path');
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');
const ngAnimate = require('angular-animate');
const ngDialog = require('ng-dialog');
const uiBootstrap = require('angular-ui-bootstrap');

const app = angular.module('gmailListView', [uiRouter, ngFileUpload, ngAnimate, ngDialog, uiBootstrap]);

let context = require.context('./config/', true, /\.js$/);
context.keys().forEach( path => {
  app.config(context(path));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  console.log('name--- ', name);
  app.controller(name, context(key));
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  app.service(name, context(key));
});

context = require.context('./component/', true, /\.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  app.component(name, module);
});
