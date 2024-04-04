import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserviewApidataPage } from './userview-apidata.page';

const routes: Routes = [
  {
    path: '',
    component: UserviewApidataPage
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
export class UserviewApidataPageRoutingModule {}
