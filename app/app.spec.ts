import { AppComponent } from './app.component';

describe('App', () => {
    let app: AppComponent;

    beforeEach(() => {
        app = new AppComponent();
    });

    it('has correct title', () => {
        expect(app.title).toEqual("Tour of Heroes");
    });
});