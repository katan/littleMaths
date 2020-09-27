import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@app/services/settings.service';
import { NavParams } from '@ionic/angular';
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
    private settings: SettingsService
  ) { }

  ngOnInit() {
    this.randomChallenges = this.settings.get('randomChallenges');
    this.countdownChallenges = this.settings.get('countdownChallenges');
  }

  async routerTo(page: string) {
    const dashboardPage: DashboardPage = this.navParams.get('dashboardPage');
    dashboardPage.dismissPopover();
    this.router.navigateByUrl(`/tabs/${page}`);
  }
}
