import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualKeyboardComponent } from '@app/shared/virtual-keyboard/virtual-keyboard.component';
import { ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements ViewDidLeave {

  @ViewChild('calculator') calculator: VirtualKeyboardComponent;

  constructor() { }

  ionViewDidLeave() {
    this.calculator.clear();
  }

}
