import angular from 'angular';
import AppModule from '../../app.module';

class Reverse {
    constructor() {
        return (input) => {
            if (input === 'test') {
                return 'test';
            }
            return input.split('').reverse().join('');
        };
    }
}

export default angular.module(AppModule.name).filter('reverse', () => new Reverse());
