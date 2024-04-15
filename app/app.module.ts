import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TasklistModule } from './tasklist/tasklist.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
