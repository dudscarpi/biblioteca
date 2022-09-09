import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros.component';


const routes: Routes = [
/*   {
    path: '',
    component: LivrosComponent,
    children: [
      {
        path: ':idLivro',
        component: LivrosComponent,
        canDeactivate: [
          VerificacaoTokenGuard
        ],
        canActivate: [
          VerificacaoTokenGuard
        ]
      }
    ],
    canActivate: [
    ]
  } */

  {
    path: 'livros',
    component: LivrosComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'livros'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }