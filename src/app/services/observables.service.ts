import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  buscador$ = new EventEmitter();
  constructor() { }
}
