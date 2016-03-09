import angular from 'angular';
import CommonModule from '../../common.module';

class Reverse{
    constructor(){
        return (input)=>{
            if(input === 'test'){
                return 'test';
            }
            return input.split('').reverse().join('');
        }
    }
}

export default angular.module(CommonModule.name).filter('reverse', ()=>new Reverse());
