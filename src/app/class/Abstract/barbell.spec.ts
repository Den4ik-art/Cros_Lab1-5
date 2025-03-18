import { Barbell } from "./barbell";

describe('barbell testing', () => {
    let barbell: Barbell;

    beforeEach(() => {
        barbell = new Barbell("Olympic Barbell", 20, "Steel", 220);
    });

    // Створення екземпляру класу
    fit("Створення екземпляру класу", () => {
        expect(barbell).toBeTruthy();
    });

    // Від'ємна вага
    fit("Створення екземпляру з від'ємною вагою", () => {
        expect(() => new Barbell("Olympic Barbell", -20, "Steel", 220))
            .toThrow(new Error('weight<=0'));
    });

    // Від'ємна довжина
    fit("Створення екземпляру з від'ємною довжиною", () => {
        expect(() => new Barbell("Olympic Barbell", 20, "Steel", -100))
            .toThrow(new Error('length<=0'));
    });

    // Перевірка методу getWeight()
    fit("Перевірка getWeight()", () => {
        expect(barbell.getWeight()).toBe(20);
    });

    // Перевірка методу displayInfo()
    fit("Перевірка displayInfo()", () => {
        expect(barbell.displayInfo()).toBe(
            "Назва: Olympic Barbell<br>Вага: 20<br>Матеріал: Steel<br>Довжина: 220"
        );
    });
});
