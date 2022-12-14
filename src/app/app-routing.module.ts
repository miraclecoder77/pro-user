import { HeroPageComponent } from '../app/component/hero-page/hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HeroPageComponent },
  { path: 'dashboard', loadChildren: () => import('../app/component/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('../app/component/log-in/log-in.module').then(m => m.LogInModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
