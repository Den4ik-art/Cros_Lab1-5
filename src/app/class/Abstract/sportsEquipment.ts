export abstract class sportsEquipment {
    name: string = '';
    weight: number = 1;
    material: string = '';
    constructor (name: string, weight: number, material: string) {
        if (weight <= 0) throw new Error ('weight<=0');
        this.name = name;
        this.weight = weight;
        this.material = material;
    }
    getWeight(): number {
        return this.weight;
    }
    abstract displayInfo(): string;
}