import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Operation } from '@shared/constants';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent {
  currentValue = 0;
  displayValue = '';
  operation = Operation;
  operations: Array<number|Operation> = [];

  @Input() showOperations: boolean;
  @Output() value = new EventEmitter<number>();
  @Output() results = new EventEmitter<number>();

  constructor() { }

  addValue(value: number) {
    this.currentValue = parseInt(`${this.currentValue}${value}`, 10);
    this.value.emit(this.currentValue);
    this.displayValue = `${this.displayValue}${value}`;
  }

  addOperation(operation: Operation) {
    this.operations.push(this.currentValue);
    this.operations.push(operation);
    this.displayValue = `${this.displayValue} ${operation} `;
    this.currentValue = 0;
  }

  submit() {
    this.operations.push(this.currentValue);
    this.currentValue = this.getResult();
    this.displayValue = this.currentValue.toString();
    this.operations = [this.currentValue];
    this.results.emit(this.currentValue);
  }

  backspace() {
    this.displayValue = this.displayValue.slice(0, this.displayValue.length - 1);
    this.currentValue = parseInt(this.displayValue, 10) || 0;
    this.value.emit(this.currentValue);
  }

  clear() {
    this.displayValue = '';
    this.currentValue = 0;
    this.operations = [];
    this.value.emit(this.currentValue);
  }

  private getResult(): number {
    let result = 0;
    let operation: Operation;

    this.operations.forEach(
      (value: number|Operation, index: number) => {
        // Set first value
        if (index === 0) {
          result = (typeof value === 'number') ? value : 0;
        }

        if (index > 0) {
          if (typeof value !== 'number') {
            operation = value as Operation;
          }

          if (typeof value === 'number' && operation) {
            result = this.getOperation(result, operation, value);
          }
        }
      }
    );

    return result;
  }

  private getOperation(value1: number, operation: Operation, value2: number) {
    switch (operation) {
      case Operation.summation:
        return value1 + value2;

        case Operation.subtraction:
          return value1 - value2;

        case Operation.multiplication:
          return value1 * value2;

        case Operation.division:
          return value1 / value2;
      }
  }
}
