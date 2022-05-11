import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PowerToxPipe } from './pipes/power-tox.pipe';
import { StringConvertPipe } from './pipes/string-convert.pipe';
import { ArraySplicePipe } from './pipes/array-splice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowerToxPipe,
    StringConvertPipe,
    ArraySplicePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
