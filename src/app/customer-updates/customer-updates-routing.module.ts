import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerUpdatesPage } from './customer-updates.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerUpdatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerUpdatesPageRoutingModule {}
