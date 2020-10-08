import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomChallengePage } from './random-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: RandomChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomChallengePageRoutingModule {}
