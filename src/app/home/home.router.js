'use strict';
export default /*@ngInject*/function ($stateProvider) {
    $stateProvider.state('app.home', {
        url: '/',
        /*@ngInject*/
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
            /*@ngInject*/
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