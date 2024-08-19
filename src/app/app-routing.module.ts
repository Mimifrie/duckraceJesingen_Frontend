import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component'; // Annahme: Pfad zur Startseite-Komponente
import { RankingComponent } from './ranking/ranking.component'; // Annahme: Pfad zur Ranking-Komponente

const routes: Routes = [  { path: '', redirectTo: '/startseite', pathMatch: 'full' },
{ path: 'startseite', component: StartseiteComponent },
{ path: 'ranking', component: RankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
