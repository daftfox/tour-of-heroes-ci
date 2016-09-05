import { Hero } from './hero';
export declare class HeroService {
    getHeroes(): Promise<Hero[]>;
    getHero(id: number): Promise<Hero>;
}
