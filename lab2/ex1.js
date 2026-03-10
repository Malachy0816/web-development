//initialising array
var myArray = [];
//function that takes in a string, adds to array and prints out array
var addTask = function (task) {
    myArray.push(task);
    console.log(task + " has been added to the Array");
    return myArray.length;
};
//function that lists all elements in array
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}
//function that removes element from array and prints remaining elements
function deleteTask(task) {
    var index = myArray.indexOf(task);
    myArray.splice(index, 1);
    console.log(task + " has been removed from the array");
    return myArray.length;
}
//calling functions to test
addTask("Work");
listAllTasks();
deleteTask("Work");
