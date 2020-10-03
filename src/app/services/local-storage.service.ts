import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Operation } from '@app/shared/constants';
import { Stat } from '@app/models/stats.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  hasSettings: boolean;
  private localStorage: Storage;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = this.document.defaultView.localStorage;
    this.hasSettings = !!this.localStorage.getItem('version');
  }

  set(key: string, value: any): void {
    this.stringifyOrParseRequired(value) ?
      this.localStorage.setItem(key, JSON.stringify(value)) :
      this.localStorage.setItem(key, value);
  }

  get(key: string, parseRequired: boolean = false): any {
    if (parseRequired) {
      const data = this.localStorage.getItem(key);
      return JSON.parse(data);
    }
    return this.localStorage.getItem(key);
  }

  push(key: string, operation: Operation, data: Stat): void {
    const stats: {} = this.get(key, true);

    // Create a new array if not exists previous operation
    if (!stats[operation]) {
      stats[operation] = [];
    }

    stats[operation].push(data);
    this.set(key, stats);
  }

  private stringifyOrParseRequired(value: any): boolean {
    return typeof value !== 'undefined' &&
      typeof value !== null &&
      typeof value !== 'string' &&
      typeof value !== 'number';
  }
}
