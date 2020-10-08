import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomChallengePageRoutingModule } from './random-challenge-routing.module';

import { RandomChallengePage } from './random-challenge.page';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RandomChallengePageRoutingModule
  ],
  declarations: [RandomChallengePage]
})
export class RandomChallengePageModule {}
