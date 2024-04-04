import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApidataviewPageRoutingModule } from './apidataview-routing.module';

import { ApidataviewPage } from './apidataview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApidataviewPageRoutingModule
  ],
  declarations: [ApidataviewPage]
})
export class ApidataviewPageModule {}
