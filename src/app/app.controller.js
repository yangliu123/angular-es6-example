'use strict';
import angular from 'angular';
import AppModule from './app.module';
class AppController{
    constructor(){
        'ngInject';
        
    }
}
export default angular.module(AppModule.name).controller('AppController', AppController);
