import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import {
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonInput, 
  IonItem, 
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent,
    MyHeaderComponent,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle,
    IonInput, 
    IonItem, 
    IonLabel,
    IonButton,
  ]
})
export class Tab2Page {
  numberList: number[] = [];
  multiplication: number = 1;
  count: number = 0;

  calculate(a1: any, b1: any) {
    try {
      let a = parseFloat(a1),
        b = parseFloat(b1);

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Parameter is not a number!');
      }

      this.numberList = [];
      this.multiplication = 1;
      this.count = 0;

      for (let i = Math.ceil(a); i <= Math.ceil(b); i++) {
        if (i % 2 === 0 && i % 8 === 0) {
          this.numberList.push(i);
          this.multiplication *= i;
          this.count += 1;
        }
      }

      if (this.count % 2 === 0 && this.count > 0) {
        console.log(this.numberList);
      } else if (this.count > 0) {
        throw new Error('The numberList of the digits is not even.');
      }

    } catch (error) {
      this.numberList = [];
      this.multiplication = 1;
      console.log(error);
    }
  }
}

