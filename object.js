// 1. prototype
function Human (name) {
    this.name = name;
}

Human.prototype.greet = function () {
    console.log("Hello" + this.name);
};

var mike = new Human("Mike");
mike.greet(); // Hello Mike

var take = new Human("Take");
take.greet(); // Hello Take

// Use of a prototype is effective for lightening the memory.
// Copied to memory is as follows.
//function Human (name) {
//    this.name = name;
//}
//---------------------------------------------------------------------

// 2. Closure
// Casestady : Base
var a = 10;
var b = 15;

function add (){
    a = 5;
    var b = 5; // refer to add only 
    console.log(a+b); // 10 : scope
}
add();

console.log(a); // 5 : override(a)
console.log(b); // 15
console.log(a+b); // 20 : override(a)

// Casestudy : Counter
function createCounter(){
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
var counter1 = createCounter ();
counter1(); // 1
counter1(); // 2
counter1(); // 3

var counter2 = createCounter ();
counter2(); // 1
counter2(); // 2
counter2(); // 3

count = 100;

counter1(); // 4

console.log(count); // 100