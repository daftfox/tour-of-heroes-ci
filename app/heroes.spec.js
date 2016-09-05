System.register(['./heroes.component', './hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var heroes_component_1, hero_service_1;
    return {
        setters:[
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            describe('Heroes', function () {
                var heroes;
                var heroService = new hero_service_1.HeroService();
                var router = jasmine.createSpyObj("Router", ['navigate']);
                beforeEach(function () {
                    heroes = new heroes_component_1.HeroesComponent(heroService, router);
                });
                it('Should have 10 heroes', function () {
                    heroes.ngOnInit();
                    setTimeout(function () {
                        expect(heroes.heroes.length).toEqual(10);
                    });
                });
                it('Should select Magneta', function () {
                    heroes.ngOnInit();
                    setTimeout(function () {
                        heroes.onSelect(heroes.heroes[5]);
                        expect(heroes.selectedHero.id).toEqual(15);
                        expect(heroes.selectedHero.name).toEqual("Magneta");
                    });
                });
                it('Should do something', function () {
                    heroes.ngOnInit();
                    setTimeout(function () {
                        heroes.onSelect(heroes.heroes[5]);
                        heroes.gotoDetail();
                        expect(true).toEqual(true);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=heroes.spec.js.map