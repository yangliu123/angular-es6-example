'use strict';
import '../assets/less/bootstrap.less';
import angular from 'angular';

import AppModule from './app.module';


angular.bootstrap(document, [AppModule.name], {strictDi:true});
