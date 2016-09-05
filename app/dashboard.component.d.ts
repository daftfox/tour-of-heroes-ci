import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
export declare class DashboardComponent implements OnInit {
    private heroService;
    private router;
    heroes: Hero[];
    constructor(heroService: HeroService, router: Router);
    ngOnInit(): void;
    gotoDetail(hero: Hero): void;
}
