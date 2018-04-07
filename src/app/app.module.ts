import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
