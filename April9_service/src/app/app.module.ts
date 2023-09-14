import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchListComponent,
    BatchDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
