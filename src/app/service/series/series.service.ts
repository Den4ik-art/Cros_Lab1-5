import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) {}

  getSeries(x: number) {
    let sum = 0;
    let term = x; // перший доданок
    let n = 1;
    const min = 1e-12;

    while (Math.abs(term) > min) {
      term = Math.pow(-1, n + 1) * Math.pow(x, n) / n;
      sum += term;
      n++;
    }

    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn;

    this.xy = new Map(); // очищення перед новими обчисленнями

    while (x <= xk) {
      const y = this.getSeries(x);
      this.xy.set(x.toFixed(2), y);
      if (this.logService) {
        this.logService.write('x= ' + x.toFixed(2) + ' y= ' + y.toFixed(6));
      }
      x = parseFloat((x + h).toFixed(10)); // уникаємо похибки округлення
    }

    return this.xy;
  }
}
