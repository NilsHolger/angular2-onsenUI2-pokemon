// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule, OnsNavigator, Params} from 'angular2-onsenui';

import { PokedexService } from './app/pokedex.service';
import { CaughtPokemonService } from './app/caught-pokemon.service';
import { CapitalizePipe } from './app/capitalizepipe';

import {MyApp} from './app/app';
import {DetailPage} from './app/details';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        OnsenModule,
        HttpModule,
    ],
    declarations: [
        MyApp,
        DetailPage,
        CapitalizePipe
    ],
    entryComponents: [
        DetailPage
    ],
    bootstrap: [
        MyApp,
    ],
    providers: [PokedexService, CaughtPokemonService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
