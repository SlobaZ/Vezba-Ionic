import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltersFindSortPage } from './filters-find-sort.page';

const routes: Routes = [
  {
    path: '',
    component: FiltersFindSortPage
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
export class FiltersFindSortPageRoutingModule {}
