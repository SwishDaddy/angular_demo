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
import { MatDialogModule } from "@angular/material/dialog";

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
	MatDialogModule,
    FlexLayoutModule,
	HttpClientModule,
	DragDropModule,
	MatDialogModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
