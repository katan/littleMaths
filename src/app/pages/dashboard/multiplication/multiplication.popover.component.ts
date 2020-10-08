import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

import { LocalStorageService } from '@app/services/local-storage.service';
import { DashboardPage } from '../dashboard.page';

@Component({
  selector: 'app-multiplication.popover',
  templateUrl: './multiplication.popover.component.html',
  styleUrls: ['./multiplication.popover.component.scss'],
})
export class MultiplicationPopoverComponent implements OnInit {
  randomChallenges: number;
  countdownChallenges: number;

  constructor(
    private navParams: NavParams,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.randomChallenges = this.localStorage.get('randomChallenges');
    this.countdownChallenges = this.localStorage.get('countdownChallenges');
  }

  async routerTo(page: string) {
    const dashboardPage: DashboardPage = this.navParams.get('dashboardPage');
    dashboardPage.dismissPopover();
    this.router.navigateByUrl(`/tabs/multiplication/${page}`);
  }
}
