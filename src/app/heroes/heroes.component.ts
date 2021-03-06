import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect (hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => {
          this.heroes = heroes
        }
      );
  }

  add(heroName: string): void {
    const name = heroName.trim();
    if(name){
      this.heroService.add({name} as Hero).subscribe(
        (hero) => this.heroes.push(hero)
      )
    }

  }

  removeHero(hero: Hero): void {
    //changed this so that it only removes the hero from the component after a successful resolve from the Observable
    var heroToDelete = this.heroes.find((h) => h === hero);
    this.heroService.removeHero(hero).subscribe(
      (hero) => {  this.heroes = this.heroes.filter((h) => h !== heroToDelete) }
    );

  }

}
