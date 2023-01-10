export class ninja {
    constructor (name, speed = 3, strength = 3, health = 0) {
        this.speed = speed;
        this.strength = strength;
        this.health = health;
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`My name is ${this.name}, my strength is ${this.strength}, my speed is ${this.speed}, and my health is ${this.health}. For more health, drink a sake!`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`My health is ${this.health}`)
    }
}


export class sensei extends ninja {
    constructor(name, speed = 10, strength = 10, health = 200, wisdom = 10) {
        super(name, speed, strength, health, wisdom)
    }

    senseiName() {
        console.log(`My name is ${this.name}`);
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Work smarter and harder");
        this.showStats();
    }
}


export default {ninja, sensei};
