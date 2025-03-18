import { Ball } from "./ball";

describe ('ball testing', () => {
    let ball: Ball;

    beforeEach(() => 
    {
        ball = new Ball("Football", 450, "Leather", "Soccer");
    })
    //створення екземпляру
    fit("Створення екземпляру класу", () => {
        expect(ball).toBeTruthy();
    })
    //від'ємна вага
    fit("Створення екземпляру з від'ємною вагою", () => {
        expect(() => new Ball("Football", -50, "Leather", "Soccer")).toThrow(new Error('weight<=0'));
    })
    //перевірка функцій
    // Тестування методу getWeight()
    fit("Перевірка getWeight()", () => {
        expect(ball.getWeight()).toBe(450);
    });
    
    // Тестування методу displayInfo()
    fit("Перевірка displayInfo()", () => {
        expect(ball.displayInfo()).toBe(
            "Назва: Football<br>Вага: 450<br>Матеріал: Leather<br>Призначений для: Soccer"
        );
    });
});