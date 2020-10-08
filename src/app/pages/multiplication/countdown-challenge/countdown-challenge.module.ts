import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountdownChallengePageRoutingModule } from './countdown-challenge-routing.module';

import { CountdownChallengePage } from './countdown-challenge.page';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CountdownChallengePageRoutingModule
  ],
  declarations: [CountdownChallengePage]
})
export class CountdownChallengePageModule {}
