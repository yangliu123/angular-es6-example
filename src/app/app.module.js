'use strict';

import angular from 'angular';

import 'angular-route';
import 'angular-ui-router';
import 'oclazyload';
import 'angular-ui-bootstrap';

import HomeModule from './home/home.module';
import AboutModule from './about/about.module';

import AppRouter from './app.router';

export default angular.module('app', [
    'ngRoute', 'ui.router', 'oc.lazyLoad', 'ui.bootstrap', 
    HomeModule.name, AboutModule.name
]).config(AppRouter);