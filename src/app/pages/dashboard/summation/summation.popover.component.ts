import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

import { LocalStorageService } from '@app/services/local-storage.service';
import { DashboardPage } from '../dashboard.page';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.popover.component.html',
  styleUrls: ['./summation.popover.component.scss'],
})
export class SummationPopoverComponent implements OnInit {
  minDigits: number;
  maxDigits: number;
  countdownChallenges: number;

  constructor(
    private router: Router,
    private navParams: NavParams,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.minDigits = this.localStorage.get('minDigits');
    this.maxDigits = this.localStorage.get('maxDigits');
    this.countdownChallenges = this.localStorage.get('countdownChallenges');
  }

  async routerTo(page: string) {
    const dashboardPage: DashboardPage = this.navParams.get('dashboardPage');
    dashboardPage.dismissPopover();
    this.router.navigateByUrl(`/tabs/${page}`);
  }

}
