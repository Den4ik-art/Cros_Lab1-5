import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { University } from '../class/university/university';
import { universitylist } from '../class/university/universitylist';
import { Chart, registerables } from 'chart.js';
import { LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyHeaderComponent
  ],
})
export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  university = new universitylist();

  dataUrl = 'https://api.jsonbin.io/v3/b/67b8a89dacd3cb34a8eb59ad'

  loading: any;
  lineChart: any;

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'polarArea',
      data: {
        labels: this.university.university.map((data) => data.departmentName),
        datasets: [
          {
            label: 'Кількість викладачів на кафедрі',
            borderColor: 'rgba(75,192,192,1)',
            data: this.university.university.map((data) => data.numberOfTeachers),
            backgroundColor: 'rgba(129, 71, 245, 0.65)',
          },
        ]
      }
    })
  }

  constructor(
    public LoadingController: LoadingController,
    private alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async load() {
    this.loading = await this.LoadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    })

    await this.loading.present();
    let data: any = [];
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        data = json;
        data = data.record;
        let i = 0;

        try {
          while (data[i] != undefined) {
            if (data[i].hasOwnProperty('numberOfTeachers')) {
              this.university.addUniversity(data[i] as University);
            } else throw new Error('Error load file');
            i++;
          }
        } catch (e) {
          this.presentAlert('Error read JSON');
          console.log((e as Error).message);
        }
        this.university.sortByfaculty();
        this.lineChartMethod();
        this.loading.dismiss();
      });

  }

  ngOnInit() {
    this.load();
  }

  getGroupedByFaculty() {
    return this.university.getGroupedByFaculty();
  }

  trackByFaculty(index: number, item: any) {
    return item.key;
  }

  trackByDepartment(index: number, item: any) {
    return item.departmentName;
  }

}