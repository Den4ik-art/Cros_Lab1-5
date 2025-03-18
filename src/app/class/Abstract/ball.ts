import { overrides } from "chart.js/dist/core/core.defaults";
import { sportsEquipment } from "./sportsEquipment";
export class Ball extends sportsEquipment {
    constructor (
        name: string,
        weight: number,
        material: string,
        public intended: string
    ) {
        super (name, weight, material);
    }

    displayInfo(): string{
        return (
            'Назва: ' + this.name + '<br>' +
            'Вага: ' + this.weight + '<br>' +
            'Матеріал: ' + this.material + '<br>' +
            'Призначений для: ' + this.intended
        );
    }
}