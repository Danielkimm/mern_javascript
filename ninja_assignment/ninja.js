class ninja {
    constructor (name) {
        this.speed = 3;
        this.strength = 3;
        this.health = 0;
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
        console.log(`My name is ${this.name}, my strength is ${this.strength}, my speed is ${this.speed}, and my new health is ${this.health}. For more health, drink more sake!`)
    }
}

export default ninja;