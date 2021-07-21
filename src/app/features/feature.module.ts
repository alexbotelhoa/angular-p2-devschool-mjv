import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorComponent } from './contributor/contributor.component';



@NgModule({
  declarations: [
    ContributorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContributorComponent
  ]
})
export class FeatureModule { }
