import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'filters-find-sort',
    loadChildren: () => import('./filters-find-sort/filters-find-sort.module').then( m => m.FiltersFindSortPageModule)
  },
  {
    path: 'apidata',
    loadChildren: () => import('./apidata/apidata.module').then( m => m.ApidataPageModule)
  },
  {
    path: 'apidataview/:id',
    loadChildren: () => import('./apidataview/apidataview.module').then( m => m.ApidataviewPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },  
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'userview/:id',
    loadChildren: () => import('./userview/userview.module').then( m => m.UserviewPageModule)
  },
  {
    path: 'userview-apidata/:id',
    loadChildren: () => import('./userview-apidata/userview-apidata.module').then( m => m.UserviewApidataPageModule)
  },
  { 
    path: '**', pathMatch: 'full',  
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then( m => m.PagenotfoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
