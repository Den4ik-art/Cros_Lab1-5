import { Dumbbell } from "./dumbbell";
import { Barbell } from "./barbell";
import { Ball } from "./ball";
import { sportsEquipment } from "./sportsEquipment";
import { NameSportsEquipmentMaps } from "./NameSportsEquipment";

export class FactorySportsEquipment {
    public static getSportsEquipment(name: string, weight: number, material: string, extraParam?: any): sportsEquipment {
        if (name == NameSportsEquipmentMaps['dumbbell'])
            return new Dumbbell (name, weight, material, extraParam as boolean);
        else if (name == NameSportsEquipmentMaps['barbell'])
            return new Barbell (name, weight, material, extraParam as number);
        else if (name == NameSportsEquipmentMaps['ball'])
            return new Ball (name, weight, material, extraParam as string);
        else throw new Error ('Невідоме спортивне обладнання')
    }
}