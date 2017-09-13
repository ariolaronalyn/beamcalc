import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BeamComputationPage } from './beam-computation';

@NgModule({
  declarations: [
    BeamComputationPage,
  ],
  imports: [
    IonicPageModule.forChild(BeamComputationPage)
  ],
  exports: [
    BeamComputationPage
  ]
})
export class BeamComputationPageModule { }
