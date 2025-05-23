import { overrides } from "chart.js/dist/core/core.defaults";
import { sportsEquipment } from "./sportsEquipment";
export class Barbell extends sportsEquipment {
    constructor (
        name: string,
        weight: number,
        material: string,
        public length: number
    ) {
        super(name, weight, material);
        if (length <= 0) throw new Error('length<=0');
    }

    displayInfo(): string{
        return (
            'Назва: ' + this.name + '<br>' +
            'Вага: ' + this.weight + '<br>' +
            'Матеріал: ' + this.material + '<br>' +
            'Довжина: ' + this.length
        );
    }
}