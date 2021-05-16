import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamComponent } from './team/team.component';
import { MenuComponent } from './welcome/menu.component';
import { PageNotFoundComponent } from './welcome/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchDetailsComponent, NgbdModalContent } from './matchDetails/match.details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MatchComponent,
    TeamComponent,
    MenuComponent,
    PageNotFoundComponent,
    MatchDetailsComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    NgbModule
    
  ],
  exports: [NgbdModalContent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent]
})
export class AppModule { }
