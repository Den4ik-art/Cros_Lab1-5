export type NameSportsEquipment = 'Гантеля' | 'Штанга';
export type NameSportsEquipmentMap = {
    [key: string]: NameSportsEquipment;
};

export const NameSportsEquipmentMaps: NameSportsEquipmentMap = {
    dumbbell: 'Гантеля',
    barbell: 'Штанга',
};