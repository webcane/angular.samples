import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorElementDirective } from './color-element.directive';
import { DelayElementDirective } from './delay-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorElementDirective,
    DelayElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
