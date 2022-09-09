import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeitoresComponent } from './leitores.component';


const routes: Routes = [
  
    {
      path: 'leitores',
      component: LeitoresComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'leitores'
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
export class LeitoresRoutingModule { }