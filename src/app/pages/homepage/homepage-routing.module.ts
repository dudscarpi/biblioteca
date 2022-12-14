import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
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
export class HomepageRoutingModule { }