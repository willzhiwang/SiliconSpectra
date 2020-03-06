// Question 1
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
console.log("Question 1: ", foo, "\n");
console.log("############################################");

//Question 2
(function() {
    console.log("Question 2 ");
    console.log(1);
    setTimeout(() => {
        console.log("Question 2 ");

        console.log(2);
    }, 1000);
    setTimeout(function() {
        console.log("Question 2 ");

        console.log(3);
    }, 0);
    console.log("Question 2 ");

    console.log(4);
})();

console.log("############################################");

console.log("Question 3");
var counter = 0;
var myArray = [
    "California",
    2,
    { handle: "state" },
    ["Alabama", "Georgia", "Alaska"]
];
for (var i = 0; i < myArray.length; i++) {
    counter++;
}
console.log(counter);
console.log("############################################");
console.log("Question 4");

var x = 10;
if (null || console.log("Hello") || x > 5) {
    console.log("Hello");
}
console.log("############################################");

console.log("Question 5");
let Circle = function(radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI * Math.pow(this.radius, 2);
    };
};
// Note: new in call
let myCircleNew = new Circle(5); // area - 78.5 for radius 5
console.log("myCircleNew...  logs");
console.log(myCircleNew.getArea());

// Note:  no new in call
let myCircleDirectCall = Circle(10); // area - 314.16 for radius 10
console.log("myCircleDirectCall...  logs");
console.log(myCircleDirectCall.getArea());
console.log("############################################");
