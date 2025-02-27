import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { sportsEquipment } from '../class/Abstract/sportsEquipment';
import { FactorySportsEquipment } from '../class/Abstract/FactorySportEquipment';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyHeaderComponent,
  ]
})
export class AbstractClassPage implements OnInit {
  ngOnInit(): void{
    this.load();
  }
  data: any = [];
  sportEquipment: sportsEquipment[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67c0b7d8ad19ca34f813ad0c';
  //dataUrl = 'https://api.jsonbin.io/v3/b/67c0c5a9ad19ca34f813b332';
  averageWeight: number = 0;
  count: number = 0;

  async load() {
    this.averageWeight = 0;
    this.count = 0;
    this.data = [];
    this.sportEquipment = [];
      fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        while (this.data[i] != undefined) {
          let se = FactorySportsEquipment.getSportsEquipment (
            this.data[i]['name'],
            this.data[i]['weight'],
            this.data[i]['material'],
            this.data[i]['isAdjustable'] | this.data[i]['length']
          );
          se.displayInfo();
          this.sportEquipment.push(se);
          this.averageWeight += se.getWeight();
          this.count++;
          i++ }       this.averageWeight = this.averageWeight / this.count;}) 
          .catch((error) => console.error("Помилка завантаження JSON:", error));}
  
  getColor(weight: number): string {
    if (weight > this.averageWeight) {
      return 'rgb(0, 255, 238)';
    } else if (weight < this.averageWeight) {
      return 'rgba(98, 0, 255, 0.866)';
    } else {
      return 'rgb(191, 0, 255)';
    }
  }
}
