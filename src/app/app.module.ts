import { AutocompleteChipComponent } from './autocomplete-chip/autocomplete-chip.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteChipComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
