import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
export declare class HeroDetailComponent implements OnInit {
    private heroService;
    private route;
    hero: Hero;
    ngOnInit(): void;
    goBack(): void;
    constructor(heroService: HeroService, route: ActivatedRoute);
}
