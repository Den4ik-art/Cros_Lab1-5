import { overrides } from "chart.js/dist/core/core.defaults";
import { sportsEquipment } from "./sportsEquipment";
export class barbell extends sportsEquipment {
    constructor (
        name: string,
        weight: number,
        material: string,
        public length: number
    ) {
        super (name, weight, material);
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