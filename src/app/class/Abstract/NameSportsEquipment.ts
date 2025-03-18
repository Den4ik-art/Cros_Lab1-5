export type NameSportsEquipment = 'Гантеля' | 'Штанга' | 'Мяч';
export type NameSportsEquipmentMap = {
    [key: string]: NameSportsEquipment;
};

export const NameSportsEquipmentMaps: NameSportsEquipmentMap = {
    dumbbell: 'Гантеля',
    barbell: 'Штанга',
    ball: 'Мяч',
};