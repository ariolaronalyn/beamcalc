import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SimplyPage } from './simply';

@NgModule({
  declarations: [
    SimplyPage,
  ],
  imports: [
    IonicPageModule.forChild(SimplyPage)
  ],
  exports: [
    SimplyPage
  ]
})
export class SimplyPageModule { }
