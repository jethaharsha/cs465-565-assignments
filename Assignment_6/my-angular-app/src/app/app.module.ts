import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HelloWorldComponent } from './app.component';
import { Browser } from 'protractor';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [HelloWorldComponent],
})
export class AppModule { }
