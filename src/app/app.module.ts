import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lessons2Component } from './lessons2/lessons2.component';
import { MyComponent } from './my/my.component';
import { Lessons3Component } from './lessons3/lessons3.component';
import { Lessons4Component } from './lessons4/lessons4.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lessons2Component,
    MyComponent,
    Lessons3Component,
    Lessons4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
