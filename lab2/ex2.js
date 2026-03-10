//class that will implement interface
var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    //implementing each function fromthe interface
    myClass.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log(task + " has been added to the Array");
        return this.myArray.length;
    };
    myClass.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myArray.length; i++) {
            console.log(this.myArray[i]);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log(task + " has been removed from the array");
        return this.myArray.length;
    };
    return myClass;
}());
//creating instance of myClass
var myclass = new myClass();
//calling each method to test if it works
myclass.addTask("Task 1");
myclass.addTask("Task 2");
myclass.addTask("Task 3");
console.log("Current Tasks: ");
myclass.listAllTasks();
myclass.deleteTask("Task 2");
console.log("Current tasks after deletion: ");
myclass.listAllTasks();
