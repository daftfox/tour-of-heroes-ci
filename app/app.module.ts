import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';

// this section is comparable to the App.config section in the app.js that is used in NG1.x
@NgModule({

    // import required modules
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],

    // declare components that are used throughout the app
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
    ],

    // declare (data)services
    providers: [
        HeroService
    ],

    // what is the entrypoint?
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule {
}
