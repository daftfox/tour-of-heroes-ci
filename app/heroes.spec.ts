import { HeroesComponent }  from './heroes.component';
import { HeroService }      from './hero.service';

import { Router }           from '@angular/router';

describe('Heroes', () => {
    let heroes:         HeroesComponent;
    let heroService:    HeroService = new HeroService()
    let router:         Router = jasmine.createSpyObj("Router", ['navigate']);

    beforeEach(() => {
        heroes = new HeroesComponent(heroService, router);
    });

    it('Should have 10 heroes', () => {
        heroes.ngOnInit();

        setTimeout(() => {
            expect(heroes.heroes.length).toEqual(10);
        });
    });

    it('Should select Magneta', () => {
        heroes.ngOnInit();
        setTimeout(() => {
            heroes.onSelect(heroes.heroes[5]);
            expect(heroes.selectedHero.id).toEqual(15);
            expect(heroes.selectedHero.name).toEqual("Magneta");
        });
    });


    it('Should do something', () => {
        heroes.ngOnInit();

        setTimeout(() => {
            heroes.onSelect(heroes.heroes[5]);
            heroes.gotoDetail();
            expect(true).toEqual(true);
        });
    });
});