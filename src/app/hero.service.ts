import { Injectable } from '@angular/core';
import { Hero } from './heroes/heroes.component';
import { of } from 'rxjs';
import { MessagesService } from './messages.service';

const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
