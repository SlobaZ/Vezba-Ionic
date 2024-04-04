import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApidataPageRoutingModule } from './apidata-routing.module';

import { ApidataPage } from './apidata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApidataPageRoutingModule
  ],
  declarations: [ApidataPage]
})
export class ApidataPageModule {}
