'use strict';
import angular from 'angular';
import HomeModule from './home.module';
class HomeController{
    constructor(){
        'ngInject';
    }
}
export default angular.module(HomeModule.name).controller('HomeController', HomeController);