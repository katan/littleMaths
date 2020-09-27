import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, PopoverController } from '@ionic/angular';
import { DashboardPage } from '../dashboard.page';

@Component({
  selector: 'app-multiplication.popover',
  templateUrl: './multiplication.popover.component.html',
  styleUrls: ['./multiplication.popover.component.scss'],
})
export class MultiplicationPopoverComponent implements OnInit {

  constructor(public navParams: NavParams, private router: Router) { }

  ngOnInit() {
    console.log(this.navParams.get('popoverElement'));
  }

  async routerTo(page: string) {
    const dashboardPage: DashboardPage = this.navParams.get('dashboardPage');
    dashboardPage.dismissPopover();
    this.router.navigateByUrl(`/tabs/${page}`);
  }
}
