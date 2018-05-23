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

//---------------------------------------------------------------------

// 3. Obsever
// Casestady : Base only once
function Observer() {
    this.listeners = [];
}
Observer.prototype.on = function(func) {
    this.listeners.push(func);
}
Observer.prototype.off = function(func) {
    var len = this.listeners.length;
    for (var i = 0; i < len; i++) {
        var listener = this.listeners[i];
        if (listener === func) {
            this.listeners.splice(i,1);
        }
    }
};

Observer.prototype.trigger = function(event) {
    var len = this.listeners.length;
    for (var i = 0; i < len; i++) {
        var listener = this.listeners[i];
        listener();
    }
};

var observer = new Observer();
var greet = function () {
    console.log("Good morning");
};
observer.on(greet);
observer.trigger(); // Good morning


// Casestady : Base multiple
function Observer () {
    this.listeners = {};
}

Observer.prototype.on = function(event, func) {
    if (! this.listeners[event]) {
        this.listeners[event]=[];
    }
        this.listeners[event].push(func);
};
Observer.prototype.off = function(event, func) {
    var ref = this.listeners[event];
    for (var i = 0; i < len; i++) {
        var listener = ref[i];
        if (listener === func) {
            ref.splice(i, 1);
        }
    }
};
Observer.prototype.trigger = function(event) {
    var ref = this.listeners[event],
        len = ref.length;
     for (var i = 0; i < len; i++) {
        var listener = ref[i];
         if(typeof listener === "function") listener();
     }
}

var observer = new Observer();
var greet = function () {
    console.log("Good morning");
};
observer.on("morning",greet);
observer.trigger("morning"); // Good morning

var sayEvening = function () {
    console.log("Good evening");
};
observer.on("evening",sayEvening);
observer.trigger("evening"); // Good morning

//---------------------------------------------------------------------

// 4. this
// Base
function Human(name) {
    this.name = name;
};
Human.prototype.greet = function () {
    console.log("Hello" + this.name);
};
var mike = new Human("Mike");
mike.greet(); // Hello Mike

// call
function Human(name) {
    this.name = name;
};
function greet (arg1, arg2) {
    console.log(arg1 + this.name + arg2);
};
var mike = new Human("Mike");
greet.call(mike, "Hello ", "!!"); // Hello Mike !!

// apply
function Human(name) {
    this.name = name;
};
function greet (arg1, arg2) {
    console.log(arg1 + this.name + arg2);
};
var mike = new Human("Mike");
var greetMorning = greet.bind(mike);
greet.apply(mike, ["Hello ", "!!"]); // Hello Mike !!
// bind
function Human(name) {
    this.name = name;
};
function greet (arg1, arg2) {
    console.log(arg1 + this.name + arg2);
};
var mike = new Human("Mike");
var greetMorning = greet.bind(mike);
greetMorning("Good morning ", "!!"); // Good morning Mike !!
