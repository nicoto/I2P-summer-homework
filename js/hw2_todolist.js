
var due = new Date();
var task1 = {
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

document.write("<ul class='toDoTaskList'>");

for(var i=0; i in toDoList; i++) {

if(toDoList[i].taskName!==null&&toDoList[i].dueDate!==null&&toDoList[i].statusOfDone!==null){
document.writeln("<li class='taskItem'>Task to do? <i>" + toDoList[i].taskName + "</i> When's it due? <i>" + toDoList[i].dueDate + "</i> Is it done? <i>" + toDoList[i].statusOfDone + "</i></li>");  
}
else
throw "One of the tasks in your todo list is incomplete. See: " + toDoList[i];
}

/*try {
toDoList[i].taskName;
toDoList[i].dueDate;
toDoList[i].statusOfDone;
return false;    
}
catch(exception) {
return true;
}*/

document.write("</ul>");