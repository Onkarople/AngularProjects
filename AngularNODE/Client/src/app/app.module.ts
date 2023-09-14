import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousService } from './marvellous.service'; //import
import { HttpClientModule } from '@angular/common/http';  //import

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //added
  ],
  providers: [MarvellousService], //added
  bootstrap: [AppComponent]
})
export class AppModule { }
