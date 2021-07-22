import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorCardComponent } from './components/contributor-card/contributor-card.component';
import { ContributorListComponent } from './components/contributor-list/contributor-list.component';



@NgModule({
  declarations: [
    ContributorCardComponent,
    ContributorListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContributorListComponent
  ]
})
export class FeatureModule { }
