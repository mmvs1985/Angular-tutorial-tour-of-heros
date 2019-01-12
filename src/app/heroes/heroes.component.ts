import { Component, OnInit } from '@angular/core';
import{ Hero} from '../hero';
//import { HEROES } from '../mock-heroes'

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {
  //how can you see variables are not pre declared
  
 /* hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  heroes: Hero[];



  //old declaration without heroes service
  //heroes=HEROES;
  //constructor() { }
  selectedHero: Hero;


  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();
    
  }
/* old implenentation without observable 
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
