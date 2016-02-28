'use strict';

export default /*@ngInject*/function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        abstract: true,
        /*@ngInject*/
        templateProvider: ($q) => {
            let deferred = $q.defer();
            require.ensure([], function () {
                let template = require('./index.html');
                deferred.resolve(template);
            });
            return deferred.promise;
        },
        //template: require('./index.html'),
        controller: 'AppController',
        controllerAs: 'app',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {
                let deferred = $q.defer();
                require.ensure([], () => {
                    let module = require('./app.controller').default;//babel6 export default
                    $ocLazyLoad.load({ name: module.name });
                    deferred.resolve(module);
                });
                return deferred.promise;
            }
        }
    });

}