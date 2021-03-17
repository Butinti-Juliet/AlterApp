import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerUpdatesPageRoutingModule } from './customer-updates-routing.module';

import { CustomerUpdatesPage } from './customer-updates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerUpdatesPageRoutingModule
  ],
  declarations: [CustomerUpdatesPage]
})
export class CustomerUpdatesPageModule {}
