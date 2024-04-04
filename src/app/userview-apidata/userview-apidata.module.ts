import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserviewApidataPageRoutingModule } from './userview-apidata-routing.module';

import { UserviewApidataPage } from './userview-apidata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserviewApidataPageRoutingModule
  ],
  declarations: [UserviewApidataPage]
})
export class UserviewApidataPageModule {}
