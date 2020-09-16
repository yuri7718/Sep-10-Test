import { Injectable } from '@angular/core';
import { Task, StripedFullWidthTable } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class SimpleTablesService {

  constructor() { }

  getTasks(): Task[] {
    return StripedFullWidthTable;
  }
}
