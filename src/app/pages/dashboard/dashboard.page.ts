import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { MultiplicationPopoverComponent } from './multiplication/multiplication.popover.component';
import { SummationPopoverComponent } from './summation/summation.popover.component';

const Maths = {
  multiplication: MultiplicationPopoverComponent,
  summation: SummationPopoverComponent
};

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  private popover: HTMLIonPopoverElement;

  constructor(private popoverController: PopoverController) {}

  async showPopover(ev: any, component: string) {
    this.popover = await this.popoverController.create({
      component: Maths[component],
      event: ev,
      translucent: true,
      componentProps: {
        dashboardPage: this
      }
    });
    return await this.popover.present();
  }

  dismissPopover() {
    this.popover.dismiss();
  }
}
