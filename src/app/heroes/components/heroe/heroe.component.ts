import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: String = 'ironman';
  public age: number = 40;

  get capitalizedName(): String{
    return this.name.toUpperCase();
  }

  getHeroDescription(): String {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm():void {
    //this.name = 'ironman';
    this.age = 40;

    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
  }
}
