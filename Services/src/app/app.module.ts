import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchdeatilsComponent } from './batchdeatils/batchdeatils.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { MarvellousService } from './marvellous.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchdeatilsComponent,
    BatchlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
