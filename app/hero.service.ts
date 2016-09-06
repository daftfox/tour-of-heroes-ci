import { Injectable }   from '@angular/core';

import { Hero }         from './hero';
import { HEROES }       from './mock-heroes'

// make the service injectable
@Injectable()
export class HeroService {

    // return typed array of heroes
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(
            heroes => heroes.find(hero => hero.id === id)
        );
    }
}