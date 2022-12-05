import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;
  currentUser: any;

  constructor() {

    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {

    this.storage = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    if (this.storage) {
      return this.storage = JSON.parse(localStorage.getItem(key) || '{}');
    }
    return null;
  }
}
