
//var due = new Date();
/*var task1 = {
    taskName:"Clean room",
    dueDate:due,
    statusOfDone:true
};
var task2 = {
    taskName:"Grocery shop",
    dueDate:due,
    statusOfDone:false
};
var task3 = {
    taskName:"Get an oil change",
    dueDate:due,
    //statusOfDone:false
};
var task4 = {
    taskName:"Haircut",
    dueDate:due,
    statusOfDone:false
};
var toDoList = [task1, task2, task3, task4];
*/

var toDoList = [
    {/*'name': 'Clean room', */'complete' : true},
    {'name': 'Grocery shop', 'complete' : true},
    {'name': 'Get an oil change', 'complete' : false},
    {'name': 'Do course homework', 'complete' : true},
    {'name': 'Get a haircut', 'complete' : false}
];

document.write("<ul class='toDoTaskList'>");

for(var i=0; i in toDoList; i++) {
   try{  
        printTask(toDoList[i]);
   }
   catch(error) {
        console.log("One of the tasks in your to-do-list is incomplete; " + error);
   }
}

function printTask(taskObj) {
    //console.log(taskObj.name === undefined);
    if(taskObj.name === undefined) {
        throw "Alas, what cannot be identified or named, can hardly be done.";
    }
    //console.log(taskObj);
    if(taskObj['complete']) { // or you can write if(taskObj.complete === true) / taskObj['complete']
        document.write('<li class="taskItem">' + taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i></li>');
    }
    else {
        document. write('<li class="taskItem">'+ taskObj.name + '</li>');
    }
}

document.write("</ul>");