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
    setAge: (newAge) => {
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
console.log("------------------");
const template = "A monkey gets {count} {friut} from me";
const values = {
    count: 1,
    friut: "apples"
};
const templatesString = (template, values) => {
    //console.log(template);
    for (let i = 0; i < template.length; i++) {
        //console.log(template[t]);
        if (template[i] === "{") {
            for (let j = i + 1; j < template.length; j++) {
                if (!template[j + 1] || template[j] === "}") {
                    break;
                }
                //console.log(template[j]);
                let word = "";
                word = word + template[j];
                //console.log(word);
                for (let key in values) {
                    //console.log(key);
                    if (key == word) {
                        console.log(key);
                    }
                }
            }
            console.log("------");
        }
    }
}; //output " A monkey gets 1 apples from me"
templatesString(template, values);
console.log("=====================");
