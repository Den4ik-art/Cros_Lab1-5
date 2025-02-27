import { dumbbell } from "./dumbbell";
import { barbell } from "./barbell";
import { sportsEquipment } from "./sportsEquipment";
import { NameSportsEquipmentMaps } from "./NameSportsEquipment";

export class FactorySportsEquipment {
    public static getSportsEquipment(name: string, weight: number, material: string, extraParam?: any): sportsEquipment {
        if (name == NameSportsEquipmentMaps['dumbbell'])
            return new dumbbell (name, weight, material, extraParam as boolean);
        else if (name == NameSportsEquipmentMaps['barbell'])
            return new barbell (name, weight, material, extraParam as number);
        else throw new Error ('Невідоме спортивне обладнання')
    }
}