import { overrides } from "chart.js/dist/core/core.defaults";
import { sportsEquipment } from "./sportsEquipment";
export class Dumbbell extends sportsEquipment {
    constructor (
        name: string,
        weight: number,
        material: string,
        public isAdjustable: boolean,
    ) {
        super (name, weight, material);
    }

    getAdjustableStatus(): string {
        return this.isAdjustable ? "Так" : "Ні";
    }

    displayInfo(): string{
        return (
            'Назва: ' + this.name + '<br>' +
            'Вага: ' + this.weight + '<br>' +
            'Матеріал: ' + this.material + '<br>' +
            `Можна змінювати вагу: ${this.getAdjustableStatus()}`
        );
    }
}