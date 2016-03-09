import AboutModule from './about.module';
import './about.controller.js';
describe('about.controller', () => {

    beforeEach(angular.mock.module(AboutModule.name));


    describe('increase/decrease', () => {
        let $controller;
        beforeEach(angular.mock.inject(($injector) => {
            $controller = $injector.get('$controller');
        }));

        it('increase', () => {
            let controller = $controller('AboutController');
            controller.increase();
            expect(controller.count).toBe(1);

        });
        it('decrease', () => {
            let controller = $controller('AboutController');
            controller.decrease();
            expect(controller.count).toBe(-1);
        });
    });

});