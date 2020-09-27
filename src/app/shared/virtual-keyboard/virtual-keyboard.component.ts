import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Operation } from '@shared/constants';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent {
  currentValue = 0;
  operationValue = 0;
  displayValue = '';
  currentOperation: Operation;
  operation = Operation;

  @Input() operations: boolean;
  @Output() value = new EventEmitter<number>();
  @Output() results = new EventEmitter<number>();

  constructor() { }

  addValue(value: number) {
    this.currentValue = parseInt(`${this.currentValue}${value}`, 10);
    this.value.emit(this.currentValue);
    this.displayValue = `${this.displayValue}${value}`;
  }

  addOperation(operation: Operation) {
    this.operationValue = this.currentValue;
    this.currentOperation = operation;
    this.displayValue = `${this.displayValue} ${operation} `;
    this.currentValue = 0;
  }

  submit() {
    if (this.currentOperation) {
      this.currentValue = this.getOperation(this.currentOperation);
    }
    this.displayValue = this.currentValue.toString();
    this.results.emit(this.currentValue);
    this.resetValues();
  }

  clear() {
    this.resetValues();
    this.displayValue = '';
    this.currentValue = 0;
    this.value.emit(this.currentValue);
  }

  private resetValues() {
    this.operationValue = 0;
    this.currentOperation = null;
  }

  private getOperation(operation: Operation): number {
    switch (operation) {
      case this.operation.summation:
        return this.currentValue + this.operationValue;
        case this.operation.subtraction:
          return this.operationValue - this.currentValue;
        case this.operation.multiplication:
          return this.operationValue * this.currentValue;
        case this.operation.division:
          return this.operationValue / this.currentValue;
      }
  }
}
