import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { HeroService }              from './hero.service';
import { Hero }                     from './hero';

@Component({
    selector:       'my-hero-detail',
    templateUrl:    'app/hero-detail.component.html',
    styleUrls:      [
        'app/hero-detail.component.css'
    ]
})

export class HeroDetailComponent implements OnInit{

    // Make the hero-variable an input (it has to be supplied by a parent component)
    @Input()
    hero: Hero;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(
                hero => this.hero = hero
            );
        });
    }

    goBack(): void {
        window.history.back();
    }

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }
}