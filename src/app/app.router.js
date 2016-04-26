'use strict';

export default /*@ngInject*/function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        abstract: true,
        /*@ngInject*/
        templateProvider: ($q) => {

            let promise = $q((resolve) => {
                require.ensure([], function () {
                    let template = require('./index.html');
                    resolve(template);
                });
            });

            return promise;
        },
        //template: require('./index.html'),
        controller: 'AppController',
        controllerAs: 'app',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {
                let promise = $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./app.controller').default;//babel6 export default
                        $ocLazyLoad.load({ name: module.name });
                        resolve(module);
                    });
                });

                return promise;
            }
        }
    });

}