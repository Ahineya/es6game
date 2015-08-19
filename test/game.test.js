import { game } from './../src/game';

describe('Game', function () {

    //let console;

    beforeEach(()=> {
        window.console = jasmine.createSpyObj('console', ['log']);
    });

    it('should log about game start', ()=>{
        game.start();
        expect(console.log).toHaveBeenCalledWith('started');
    });

});
