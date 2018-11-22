import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalLikePage } from './modal-like';

@NgModule({
  declarations: [
    ModalLikePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalLikePage),
  ],
})
export class ModalLikePageModule {}
