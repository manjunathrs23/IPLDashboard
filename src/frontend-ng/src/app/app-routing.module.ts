import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './welcome/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'matches', component: MatchComponent },
  { path: 'teams', component: TeamComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**',   component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
