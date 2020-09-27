import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { ExploreContainerComponentModule } from '@shared/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]),
    Tab3PageRoutingModule,
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
