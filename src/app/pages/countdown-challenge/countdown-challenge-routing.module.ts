import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountdownChallengePage } from './countdown-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: CountdownChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownChallengePageRoutingModule {}
