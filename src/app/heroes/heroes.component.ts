import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  selectedHero?: Hero;
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(h: Hero) {
    this.messageService.add(`HeroesComponent: Selected hero id=${h.id}`);
    this.selectedHero = h;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
