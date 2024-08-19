import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StartseiteComponent } from './startseite/startseite.component';
import { FormsModule } from '@angular/forms'; // Import hinzufügen
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Import hinzufügen
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    HeaderComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // FormsModule hinzufügen
    Ng2SearchPipeModule, // Ng2SearchPipeModule hinzufügen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
