import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    CommonModule
  ],
})
export class Tab3Page {
  a: number[][] = [];
  columnProducts: number[] = [];
  resultsRow: number[] = [];

  arraycalc(n1: any) {
    try {
      let n = parseInt(n1, 10);
      
      if (isNaN(n) || n <= 0) {
        throw new Error('Please enter a valid positive number for N');
      }
      this.a = [];
      this.columnProducts = [];
      this.resultsRow = [];

      for (let i = 0; i < n; i++) {
        this.a[i] = [];
        for (let j = 0; j < n; j++) {
          let randomValue = Math.floor(Math.random() * 10) + 1;
          this.a[i][j] = randomValue;
          
          if (i === 0) {
            this.columnProducts[j] = randomValue;
          } else {
            this.columnProducts[j] *= randomValue;
          }
        }
      }
      this.resultsRow = [...this.columnProducts];
    } catch (error) {
      console.log(error);
    }
  }

  getColor(index: number) {
    return this.columnProducts[index] > 1000 ? 'lightblue' : 'transparent';
  }
}
