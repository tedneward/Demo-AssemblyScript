namespace classes {

// {{## BEGIN class ##}}
class Point {
  x: i32;
  y: i32;
  constructor(x: i32, y: i32) {
    this.x = x;
    this.y = y;
  }
  add(other : Point) : Point {
    this.x += other.x;
    this.y += other.y;
    return this;
  }
  get distance () : i32 {
    return Math.sqrt(
      (this.x * this.x) + (this.y * this.y)); 
  }
  toString() : string {
    return `Point(${this.x}, ${this.y})`;
  }
}
// {{## END class ##}}

// {{## BEGIN properties ##}}
class Simple {
  constructor(public x: number, public y: number) { }

  get xy() : number { return this.x * this.y; }
  get z() : number { return this.x - this.y; }
  set z(newX: number) { this.x = newX; }
}
// {{## END properties ##}}

// {{## BEGIN ctor ##}}
class Person {
  constructor (public firstName : string, public lastName : string, public age : i8) {
      // No body required
  }
}
// {{## END ctor ##}}

/*
// {{## BEGIN inheritance ##}}
class ThreeDPoint extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x,y);
    this.z = z;
  }
  get distance () {
    let dist = super.distance;
    return Math.sqrt(
      (dist * dist) + (this.z * this.z)); 
  }
}

let p : Point = new ThreeDPoint(1, 1, 1);
console.log(p.distance);
// {{## END inheritance ##}}
*/
}