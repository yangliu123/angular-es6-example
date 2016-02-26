'use strict';
export default function ($stateProvider) {
    'ngInject';
    $stateProvider.state('app.home', {
        url: '/',
        templateProvider: ($q) => {
            let deferred = $q.defer();
            require.ensure([], function () {
                deferred.resolve(require('./index.html'));
            });
            return deferred.promise;
        },
        controller: 'HomeController',
        controllerAs: 'home',
        resolve: {
            load: ($q, $ocLazyLoad) => {
                let deferred = $q.defer();
                require.ensure([], () => {
                    let module = require('./home.controller').default;
                    $ocLazyLoad.load({ name: module.name });
                    deferred.resolve(module);
                });
                return deferred.promise;
            }
        }
    });

}