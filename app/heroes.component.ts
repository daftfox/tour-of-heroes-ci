import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { Router }               from '@angular/router';

import { Hero }                 from './hero';
import { HeroService }          from './hero.service';

// A component is like a directive
// selector: tells angular what the element 'tag' is
// template: the HTML template
@Component({
    selector:       'my-heroes',
    templateUrl:    'app/heroes.component.html',
    styleUrls:      [
        'app/heroes.component.css'
    ],
})

export class HeroesComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes
        );
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}