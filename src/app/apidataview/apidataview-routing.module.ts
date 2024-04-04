import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApidataviewPage } from './apidataview.page';

const routes: Routes = [
  {
    path: '',
    component: ApidataviewPage
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
export class ApidataviewPageRoutingModule {}
