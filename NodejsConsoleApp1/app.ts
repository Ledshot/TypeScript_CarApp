console.log('Hello world');


class Car {
   engine: string;

   constructor(engine: string) {
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


