import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResnestDataService {
  constructor() {}

  data: { floors: number; rooms: number } = { floors: 0, rooms: 0 };

  updateRooms(newValue: number) {
    this.data.rooms = newValue;
  }
}
