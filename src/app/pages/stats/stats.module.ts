import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatsPage } from './stats.page';
import { Tab2PageRoutingModule } from './stats-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [StatsPage]
})
export class StatsPageModule {}
