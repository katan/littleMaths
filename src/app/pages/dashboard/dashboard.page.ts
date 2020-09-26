import { Component, ComponentRef } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { MultiplicationPopoverComponent } from './multiplication/multiplication.popover.component';

const Maths = {
  multiplication: MultiplicationPopoverComponent,
};

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

  constructor(private popoverController: PopoverController) {}

  async showPopover(ev: any, component: string) {
    const popover = await this.popoverController.create({
      component: Maths[component],
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
