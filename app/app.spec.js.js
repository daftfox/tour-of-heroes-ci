System.register(['./app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _this = this;
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('App', function () {
                beforeEach(function () {
                    this.app = new app_component_1.AppComponent();
                });
                it('has correct title', function () {
                    expect(_this.app.title).toEqual("Tour of Heroes");
                });
            });
        }
    }
});
//# sourceMappingURL=app.spec.js.js.map