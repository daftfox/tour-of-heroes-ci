import { Hero } from './hero';

describe('Hero', () => {
    it('has name', () => {
        let hero: Hero = new Hero(1, "Super Cat");
        expect(hero.name).toEqual('Super Cat');
    });
    it('has id', () => {
        let hero: Hero = new Hero(1, "Super Cat");
        expect(hero.id).toEqual(1);
    });
});