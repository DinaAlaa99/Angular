import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PowerToxPipe } from './pipes/power-tox.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, PowerToxPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
