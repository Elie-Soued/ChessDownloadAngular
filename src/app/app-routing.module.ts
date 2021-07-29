import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './Vues/result-page/result-page.component';
import { LandingPageComponent } from './Vues/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'results', component: ResultPageComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
