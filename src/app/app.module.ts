import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/stack-overflow/search.service";
import {AppRoutingModule} from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';
import { StackOverflowQuestionsComponent } from './dashboard/stack-overflow-questions/stack-overflow-questions.component';
import { WeatherRowComponent } from './dashboard/stack-overflow-questions/weather-row/weather-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    StackOverflowQuestionsComponent,
    WeatherRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
