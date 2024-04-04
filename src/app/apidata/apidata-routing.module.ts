import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApidataPage } from './apidata.page';

const routes: Routes = [
  {
    path: '',
    component: ApidataPage
  },
  { 
    path: '**', pathMatch: 'full',  
    loadChildren: () => import('../pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApidataPageRoutingModule {}
