import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexComponent } from './spacex/spacex.component';
import { SpacexService } from './spacex.service';
import { LunchyearPipe } from './lunchyear.pipe';
import { DuplicatesPipe } from './duplicates.pipe';
import { SuceeslaunchPipe } from './suceeslaunch.pipe';
import { SuccesslandPipe } from './successland.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    LunchyearPipe,
    DuplicatesPipe,
    SuceeslaunchPipe,
    SuccesslandPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
