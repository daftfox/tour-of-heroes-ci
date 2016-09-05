import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
export declare class HeroesComponent implements OnInit {
    private heroService;
    private router;
    constructor(heroService: HeroService, router: Router);
    ngOnInit(): void;
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero): void;
    getHeroes(): void;
    gotoDetail(): void;
}
