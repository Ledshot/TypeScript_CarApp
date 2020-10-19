console.log('Hello world');
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        console.log('Engine started: ' + this.engine);
    }
    stop() {
        console.log('Engine stopped: ' + this.engine);
    }
}
var car = new Car('Boxer');
car.start();
car.stop();
//# sourceMappingURL=app.js.map