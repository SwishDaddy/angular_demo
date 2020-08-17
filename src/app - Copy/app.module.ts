import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import "@angular/compiler";

import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
	HttpClientModule,
	DragDropModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
