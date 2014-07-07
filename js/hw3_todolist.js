$(document).ready(function () {

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

    for (var i = 0; i in toDoList; i++) {
        try {
            printTask(toDoList[i], i);
        } catch (error) {
            console.log("One of the tasks in your to-do-list is incomplete; " + error);
        }
    }

    function printTask(taskObj, counter) {

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

    function removeCompleted() { //slice and splice
            $('li.taskCompleted').remove(); // just to affect the HTML of the page and the task object can stay the same.
            //$.inArray(taskObj)
            // sync with a cloud application and remove the entry from the database
        }
        // JQUERY HERE TO GENERATE HTML
        // $(".toDoTaskList").append("<li class='taskItem'></li>");
        // $('.taskItem').text('abc');
});