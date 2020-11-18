import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {CounterState} from './counter/counter.state';
import {NgxsModule} from '@ngxs/store';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      CounterState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: CounterState
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
