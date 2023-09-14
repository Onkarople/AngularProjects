import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvellousService } from './marvellous.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchDetailsComponent,
    BatchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
