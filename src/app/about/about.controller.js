'use strict';
import angular from 'angular';

class AboutController{
    constructor($http){
        'ngInject'
        this.$http = $http;
        this.count = 0;
    }
    increase(){
        this.count++;
    }
    decrease(){
        this.count--;
    }
}
export default angular.module('app.about').controller('AboutController', AboutController);