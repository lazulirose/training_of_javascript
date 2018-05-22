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


