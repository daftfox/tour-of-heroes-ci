System.register(['./app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('App', function () {
                var app;
                beforeEach(function () {
                    app = new app_component_1.AppComponent();
                });
                it('has correct title', function () {
                    expect(app.title).toEqual("Tour of Heroes");
                });
            });
        }
    }
});
//# sourceMappingURL=app.spec.js.map