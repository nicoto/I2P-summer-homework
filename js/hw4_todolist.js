$(document).ready(function () {

    // EQUIVALENT TO THE MAIN PROGRAM FUNCTION
    var toDoList = [{
        'name': 'Clean room',
        'complete': true
    }, {
        'name': 'Grocery shop',
        'complete': true
    }, {
        'name': 'Get an oil change',
        'complete': false
    }, {
        'name': 'Do course homework',
        'complete': true
    }, {
        'name': 'Get a haircut',
        'complete': false
    }];

    // Unordered list element of class ***taskListGroup***
    $('.panel-body').append('<ul class="taskListGroup"></ul>');

    addTask("Go running"); // Function call addTask calls newTask that calls dueNextWeek

    for (var i = 0; i in toDoList; i++) {
        try {
            printTask(toDoList[i], i);
        } catch (error) {
            console.log("One of the tasks in your to-do-list is incomplete; " + error);
        }
    }

    function printTask(taskObj, i) {

        // This conditional makes the counter argument passed into the function, as called, optional. Not this as originally written: if (counter===null) counter=0; 
        var counter = i || 0;

        if (taskObj.name === undefined) {
            throw "You are missing a task name; what cannot be identified or named, can hardly be done.";
        }

        if (taskObj.complete === true) { // or you can write taskObj['complete']
            $('.taskListGroup').append("<li class='taskCompleted' id='litem-" + counter + "'></li>");

            var strTempID = 'li#litem-' + counter;
            $(strTempID).text(taskObj.name).append("&nbsp;&nbsp;<i class='glyphicon glyphicon-ok'></i>");
            $(strTempID).css("color", "green");

        }
    }

    /* The function (addTask) calls newTask() and adds the object returned from that function to the array 
    where we keep the rest of our task objects. Once done, we re-render the list HTML.*/
    function addTask(needs2Bdone) {
        var theTask = {};
        theTask = newTask(needs2Bdone);
        console.log("The task at hand is: " + theTask.name + ", " + theTask.dueDate + ", " + theTask.complete);
        toDoList.pop(theTask);
        printTask(toDoList);

        // Now re-render the list in HTML

    }

    /*Write a constructor function (Task) that accepts a name and returns an object with properties for the name, 
    complete status, and now a “due date”. For simplicity’s sake, every object’s complete status should be false, 
    and every object’s due date should be a Javascript Date object (not a string) that is equal to one week from 
    today.*/
    function newTask(name) { // a constructor function
        var todaysDate = new Date();
        this.dueDate = dueNextWeek(todaysDate);
        this.name = name;
        this.complete = false;
        var taskObj = {
            'name': this.name,
            'dueDate': this.dueDate,
            'complete': this.complete
        };
        console.log(taskObj);
        // Test to see if the object toDoList exists and whether or not it might be empty.
        // Does the array exist, written as so: if (typeof toDoList == "undefined"){}
        return taskObj;
    }

    function dueNextWeek(dueDate) {
        dueDate.setDate(dueDate.getDate() + 7);
        console.log("One week from today is " + dueDate);
        return dueDate;
    }

    function removeCompleted() { //slice and splice
            $('li.taskCompleted').remove(); // just to affect the HTML of the page and the task object can stay the same.
            //$.inArray(taskObj)
            // sync with a cloud application and remove the entry from the database
        }
        // JQUERY HERE TO GENERATE HTML
        // $(".toDoTaskList").append("<li class='taskItem'></li>");
        // $('.taskItem').text('abc');
});