import { Dumbbell } from "./dumbbell";

describe('dumbbell testing', () => {
    let dumbbell: Dumbbell;

    beforeEach(() => {
        dumbbell = new Dumbbell("Adjustable Dumbbell", 10, "Iron", true);
    });

    // Створення екземпляру класу
    fit("Створення екземпляру класу", () => {
        expect(dumbbell).toBeTruthy();
    });

    // Від'ємна вага
    fit("Створення екземпляру з від'ємною вагою", () => {
        expect(() => new Dumbbell("Adjustable Dumbbell", -10, "Iron", true))
            .toThrow(new Error('weight<=0'));
    });

    // Перевірка методу getWeight()
    fit("Перевірка getWeight()", () => {
        expect(dumbbell.getWeight()).toBe(10);
    });

    // Перевірка методу getAdjustableStatus()
    fit("Перевірка getAdjustableStatus() - Регульована гантель", () => {
        expect(dumbbell.getAdjustableStatus()).toBe("Так");
    });

    fit("Перевірка getAdjustableStatus() - Нерегульована гантель", () => {
        const nonAdjustableDumbbell = new Dumbbell("Fixed Dumbbell", 15, "Iron", false);
        expect(nonAdjustableDumbbell.getAdjustableStatus()).toBe("Ні");
    });

    // Перевірка методу displayInfo()
    fit("Перевірка displayInfo() - Регульована гантель", () => {
        expect(dumbbell.displayInfo()).toBe(
            "Назва: Adjustable Dumbbell<br>Вага: 10<br>Матеріал: Iron<br>Можна змінювати вагу: Так"
        );
    });

    fit("Перевірка displayInfo() - Нерегульована гантель", () => {
        const nonAdjustableDumbbell = new Dumbbell("Fixed Dumbbell", 15, "Iron", false);
        expect(nonAdjustableDumbbell.displayInfo()).toBe(
            "Назва: Fixed Dumbbell<br>Вага: 15<br>Матеріал: Iron<br>Можна змінювати вагу: Ні"
        );
    });
});
