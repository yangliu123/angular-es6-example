'use strict';
export default /*@ngInject*/function ($stateProvider) {
    $stateProvider.state('app.about', {
        url: '/about',
        /*@ngInject*/
        templateProvider: ($q) => {
            let deferred = $q.defer();
            require.ensure([], function () {
                deferred.resolve(require('./index.html'));
            });
            return deferred.promise;
        },
        controller: 'AboutController',
        controllerAs: 'about',
        resolve: {
            loadAboutController: /*@ngInject*/($q, $ocLazyLoad) => {
                let deferred = $q.defer();
                require.ensure([], () => {
                    let module = require('./about.controller').default;
                    $ocLazyLoad.load({ name: module.name });
                    deferred.resolve(module);
                });
                return deferred.promise;
            },
            loadReverseFilter: /* @ngInject */($q, $ocLazyLoad) => {
                let deferred = $q.defer();
                require.ensure([], () => {
                    
                    $ocLazyLoad.load({ name: require('../../shared/reverse/reverse.filter').default.name });
                    deferred.resolve();
                });
                return deferred.promise;
            }
            
        }
    });

}