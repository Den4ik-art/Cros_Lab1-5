import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    MyHeaderComponent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MyHeaderComponent
  ]
})

export class ServicepagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {
    Chart.register(...registerables);
  }
  
  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart: any;

  lineChartMake() {
  if (this.lineChart instanceof Chart) {
    this.lineChart.destroy();
  }
  this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
    type: 'line',
    data: {
      labels: this.xx,
      datasets: [
        {
          label: 'Табулювання',
          data: this.yyTab,
          fill: false,
          borderColor: 'salmon',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 2,
          spanGaps: false,
        },
        {
          label: 'Рекурсія',
          data: this.yyRec,
          fill: false,
          borderColor: '#123456',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 4,
          spanGaps: false,
        },
        {
          label: 'Ряд',
          data: this.yySer,
          fill: false,
          borderColor: 'aqua',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 6,
          spanGaps: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          suggestedMin: 0,
          title: {
            display: true,
            text: 'X'
          },
          ticks: {
            stepSize: 0.001,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Y'
          },
          ticks: {
            stepSize: 0.001,
          },
        },
      },
    },
  });
  }
  ras(xn: any, xk: any, h: any) {
    try {
      let xn1 = parseFloat(xn),
          xk1 = parseFloat(xk),
          h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      console.log('Табулювання');
      let obj = this.tabService.getTab(xn1, xk1, h1);
      this.xx = obj.x;
      this.yyTab = obj.y;
      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log('Рекурсія');
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

      this.input();
      this.lineChartMake();
    } catch { console.error("Помилка при обчисленні:"); }
  }
  input() {
    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];

    this.xx.forEach((value, index) => {
      let s = '';
      let yTab: number = this.yyTab[index];
      s = yTab.toFixed(4) + ' ';

      let ySer = this.xySeries.get(value);
      if (ySer !== undefined) {
        this.yySer.push(ySer);
        s += ySer.toFixed(4) + ' ';
      } else {
        this.yySer.push(0);
        s += '0.0000 ';
      }

      let yRec = this.xyRecursion.get(parseFloat(value));
      if (yRec !== undefined) {
        this.yyRec.push(yRec);
        s += yRec.toFixed(4);
      } else {
        this.yyRec.push(0);
        s += '0.0000';
      }

      this.xyInput.push(s);
    });
  }
  ngOnInit() {
  }

}

