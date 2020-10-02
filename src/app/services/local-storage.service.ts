import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  hasSettings: boolean;
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.hasSettings = !!this.window.localStorage.getItem('version');
  }

  set(key: string, value: any): void {
    this.window.localStorage.setItem(key, value);
  }

  get(key: string): any {
    return this.window.localStorage.getItem(key);
  }
}