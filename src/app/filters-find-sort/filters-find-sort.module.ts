import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersFindSortPageRoutingModule } from './filters-find-sort-routing.module';

import { FiltersFindSortPage } from './filters-find-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltersFindSortPageRoutingModule
  ],
  declarations: [FiltersFindSortPage]
})
export class FiltersFindSortPageModule {}
