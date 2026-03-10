//Creating interface that contains array of strings and three functions
interface User {
   myArray: string[];
   addTask(task: string): number;
   listAllTasks(): void;
   deleteTask(task: string): number;
}
//class that will implement interface
class myClass implements User {

    myArray: string[] = [];

    //implementing each function from the interface
    addTask(task:string):number{
    this.myArray.push(task);
    console.log(task+" has been added to the Array");
    return this.myArray.length;
}

listAllTasks():void{
    for(let i = 0; i < this.myArray.length; i++){
        console.log(this.myArray[i]);
    }
}

deleteTask(task:string){

    let index = this.myArray.indexOf(task);
    this.myArray.splice(index,1);
    console.log(task+" has been removed from the array")
    return this.myArray.length;
}

}

//creating instance of myClass
const myclass = new myClass();

//calling each method to test if it works
myclass.addTask("Task 1");
myclass.addTask("Task 2");
myclass.addTask("Task 3");

console.log("Current Tasks: ");

myclass.listAllTasks();

myclass.deleteTask("Task 2");

console.log("Current tasks after deletion: ");
myclass.listAllTasks();