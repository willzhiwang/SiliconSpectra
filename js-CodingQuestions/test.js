let Circle = function(r) {
  this.radius = r;
  this.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
};
let Circle1 = new Circle(5);
console.log(" ", Circle1.getArea());

let Circle2 = new Circle(10);
console.log(" ", Circle2.getArea());

let myObj = {
  age: 20,
  setAge: newAge => {
    this.age = newAge;
  },
  getAge: () => this.age,
  getAccess: function() {
    if (this.age > 55) {
      return "Sensior";
    } else {
      return "No Sen";
    }
  },
  getGettor: function() {
    if (this.getAge() > 55) {
      return "Sensior";
    } else {
      return "No Sen";
    }
  }
};
myObj.setAge(57);
console.log("A", myObj.getAccess());
console.log("G", myObj.getGettor());
console.log("==============");

foo = 1;
(function() {
  foo = 2;
})();
var x = function() {
  foo = 3;
};
(function() {
  foo = 4;
})();
console.log(foo);
console.log("==============");
(function() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
