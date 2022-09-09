import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// localhost:4200 -> localhost:4200/funcionarios

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/homepage/homepage-routing.module').then(m => m.HomepageRoutingModule)
  },
  {
    path: 'emprestimos',
    loadChildren: () => import('./pages/emprestimos/emprestimos-routing.module').then(m => m.EmprestimosRoutingModule)
  },
  {
    path: 'leitores',
    loadChildren: () => import('./pages/leitores/leitores-routing.module').then(m => m.LeitoresRoutingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }