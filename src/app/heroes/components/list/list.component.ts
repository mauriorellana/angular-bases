import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: String[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Wolverine'];
    public deletedHero?: String;

    removeLastHeroe():void {
      this.deletedHero = this.heroNames.pop();
    }
}
