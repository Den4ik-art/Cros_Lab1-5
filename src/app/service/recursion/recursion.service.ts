import { LogService } from '../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecursionService {
    yy: number = 0;
    private xy = new Map();
    constructor(@Optional() private logService: LogService) {}

    getRecursion(x: number, term: number, n: number, sum: number): number {
        const min = 1e-12;

        // Перевірка на допустимий діапазон
        if (x <= -1 || x > 1) {
        throw new Error("Аргумент x повинен бути в межах -1 < x ≤ 1");
        }

        sum += term;

        if (Math.abs(term) < min) {
        return sum;
        }

        n++;
        const nextTerm = Math.pow(-1, n + 1) * Math.pow(x, n) / n;
        return this.getRecursion(x, nextTerm, n, sum);
    }

    getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
        console.log("hi");
        let x = xn;
        while (x <= xk) {
            try {
                this.yy = this.getRecursion(x, x, 1, 0);
                this.xy.set(x, this.yy);
                if (this.logService)
                    this.logService.write("x=" + x.toFixed(2) + " y=" + this.yy.toFixed(4));
            } catch (error: any) {
                console.error("Помилка при обчисленні для x=" + x.toFixed(2) + ": " + error.message);
            }
            x = x + h;
        }
        return this.xy;
    }
}