import { Injectable } from '@angular/core';

const positions: string[] = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager'
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTypes(): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          'Full',
          'Part'
        ]);
      }, 1000);
    });
  }

  getPositions(): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(positions);
      }, 1600);
    });
  }

}
