import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrueDateService {

  constructor() { }

  makeDate(): string {
    const d = new Date();
    const td = String(d.getFullYear() + 1);
    return td
  }
}
