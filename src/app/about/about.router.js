'use strict';
export default /*@ngInject*/function ($stateProvider) {
    $stateProvider.state('app.about', {
        url: '/about',
        /*@ngInject*/
        templateProvider: ($q) => {
            'ngInject';
            let deferred = $q.defer();
            require.ensure([], function () {
                deferred.resolve(require('./index.html'));
            });
            return deferred.promise;
        },
        controller: 'AboutController',
        controllerAs: 'about',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {
                'ngInject';
                let deferred = $q.defer();
                require.ensure([], () => {
                    let module = require('./about.controller').default;
                    $ocLazyLoad.load({ name: module.name });
                    deferred.resolve(module);
                });
                return deferred.promise;
            }
        }
    });

}