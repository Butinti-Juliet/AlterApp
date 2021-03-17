import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMeasurePageRoutingModule } from './view-measure-routing.module';

import { ViewMeasurePage } from './view-measure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMeasurePageRoutingModule
  ],
  declarations: [ViewMeasurePage]
})
export class ViewMeasurePageModule {}
