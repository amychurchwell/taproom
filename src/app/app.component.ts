import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taproom';
  kegs: Keg[] = [
    new Keg('Butterbeer', 200, 20, `HufflePuff`),
    new Keg('Dragon\'s Breath', 500, 5, 'Spielburg Cellars'),
    new Keg('Fireball', 10, 2, 'Volcano vineyards on a volcano'),
    new Keg('Motor Oil', 0, 6, 'Mobil')
  ];
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
}

export class Keg {
  public pintsRemaining: number = 124;
  constructor(
    public name: string,
    public alcoholContent: number,
    public pintPrice: number,
    public brand: string,
  ){ }
}

//add keg to list, edit kegs
