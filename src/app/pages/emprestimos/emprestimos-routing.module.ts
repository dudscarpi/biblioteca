import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimosComponent } from './emprestimos.component';


const routes: Routes = [
  
    {
      path: 'emprestimos',
      component: EmprestimosComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'emprestimos'
    }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmprestimosRoutingModule { }