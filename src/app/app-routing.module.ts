import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'search',
    loadChildren: 'src/app/search/search.module#SearchModule',
    canActivate: [ AuthGuard ],
  },
  {
    path: 'detail/:type/:id',
    loadChildren: 'src/app/detail/detail.module#DetailModule',
    canActivate: [ AuthGuard ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
