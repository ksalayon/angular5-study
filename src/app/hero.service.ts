import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes ');
    return of(HEROES);
  }

  getHero(id): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero with id ${id}`);
    const hero = HEROES.find(h => h.id === id);
    return of(hero);
  }

}
