import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';

import { AppComponent } from './app.component';
import { ConnectService } from './connect.service';
import {MdCardModule, MdGridListModule, MdToolbarModule, MdIconModule, MdButtonModule, MdAutocompleteModule, MdSelectModule, MdProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MasonryModule,
    FormsModule,
    HttpModule,
    JsonpModule, BrowserAnimationsModule,
    MdCardModule, MdGridListModule, MdToolbarModule, MdIconModule, MdAutocompleteModule, MdButtonModule, MdSelectModule, MdButtonModule, MdProgressSpinnerModule
  ],
  providers: [ConnectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
