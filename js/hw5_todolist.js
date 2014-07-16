    // This is just a placeholder date for the purpoose of filling the object.
    var tempDate = new Date();
    
    // Place outside of the document.ready statement; it needs to be a global variable.
    var toDoList = [{
        'name': 'Clean room',
        'dueDate': tempDate,
        'complete': true
    }, {
        'name': 'Grocery shop',
        'dueDate': tempDate,       
        'complete': true
    }, {
        'name': 'Get an oil change',
        'dueDate': tempDate,         
        'complete': false
    }, {
        'name': 'Do course homework',
        'dueDate': tempDate,         
        'complete': true
    }, {
        'name': 'Get a haircut',
        'dueDate': tempDate,         
        'complete': true
    }];
    
$(document).ready(function () {

    /* Event listener in order to mark off a task as complete
    $('.checkoff').on('dbclick', function(evt){
    }) */
    
    // Listen for a click on a new archive button that lives outside the list to removeCompleted() 
    $('#archive').on('click', function(){
        removeCompleted();
    });
    
    // bind AddTask() to a form with fields where users can fill out a name and hit submit    
    $('#submitNew').on('click', function(){
        var newTaskInput = $('.form-control').val();
        
        // Use constructor to add the new task
        var positionOfTask = addTask(newTaskInput);
        
        // Then change the status of complete from false to true
        toDoList[positionOfTask].complete = true;
        console.log("Checking status here: " + toDoList[positionOfTask].complete);  // test output
        
        // First, remove all items from the to do list
        $('li.taskCompleted').remove(); 
        
        // Unordered list element of class ***taskListGroup***
        $('.panel-body').append('<ul class="taskListGroup"></ul>');
        
        // reRender the HTML - eventually, break this out into a separate function
        for (var i = 0; i in toDoList; i++) {
            try {
                printTask(toDoList[i], i);
            } catch (error) {
                console.log("One of the tasks in your to-do-list is incomplete; " + error);
            }
        }        
    });
    
    // Unordered list element of class ***taskListGroup***
    $('.panel-body').append('<ul class="taskListGroup"></ul>');

    // Some error handling with a call to output tasks in the HTML of hw5_todolist.html
    for (var i = 0; i in toDoList; i++) {
        try {
            printTask(toDoList[i], i);
        } catch (error) {
            console.log("One of the tasks in your to-do-list is incomplete; " + error);
        }
    }

    function printTask(taskObj, i) {
        console.log(taskObj);
        // This conditional makes the counter argument passed into the function, as called, optional. Not this was originally written: if (counter===null) counter=0; 
        var counter = i || 0;

        if (taskObj.name === undefined) {
            throw "You are missing a task name; what cannot be identified or named, can hardly be done.";
        }

        if (taskObj.complete === true) { // or you can write taskObj['complete']
            $('.taskListGroup').append("<a href='#' class='checkoff' id='checkoff" + i + "'><li class='taskCompleted' id='litem-" + counter + "'></li></a>");

            var strTempID = 'li#litem-' + counter;
            $(strTempID).text(taskObj.name).append("&nbsp;&nbsp;<i class='glyphicon glyphicon-ok'></i>");
            $(strTempID).css("color", "green");

        }
    }

    /* The function (addTask) calls newTask() and adds the object returned from that function to the array 
    where we keep the rest of our task objects. Once done, we re-render the list HTML.*/
    function addTask(needs2Bdone) {

        var theTask = new Task(needs2Bdone); // constructor call
        console.log("The task at hand is: " + theTask.name + ", " + theTask.dueDate + ", " + theTask.complete);
        toDoList.push(theTask); // adds the object to the ToDoListarray
        console.log("You successfully added the new task object to your array.");
        printTask(theTask);
        
        // Trying to return the position or index of the new item in the array!
        console.log(toDoList.indexOf(theTask));
        return toDoList.indexOf(theTask);
        
    }

   function Task(name) { // a constructor function
        var todaysDate = new Date();
        this.dueDate = dueNextWeek(todaysDate);
        console.log(this.dueDate); //OUTPUT to determine whether dueNextWeek runs correctly
        this.name = name || 'test'; // this statement indicates an optional constructor function parameter
        this['complete'] = false; // rather than this.complete because complete is a key word.
        var taskObj = {
            'name': this.name,
            'dueDate': this.dueDate,
            'complete': this.complete
        };
        // Later, you may test to see if the object toDoList exists and whether or not it might be empty. Does the array exist, written as so: if (typeof toDoList == "undefined"){}
        return taskObj;
    }

    function dueNextWeek(dueDate) {
        dueDate.setDate(dueDate.getDate() + 7);
        console.log("One week from today is " + dueDate);
        return dueDate;
    }

    // Function call
    addTask("Go running");

    function removeCompleted() { //slice and splice
            $('li.taskCompleted').remove(); // just to affect the HTML of the page and the task object can stay the same.
            
            console.log("You have removed a list item in your HTML");
            // Remove any completed object entry from the toDoList array
            for(var any=0; any <toDoList.length; any++){
                if(toDoList[any].complete===true){
                    console.log("The item " + toDoList[any].name + " ought to be removed.");
                    toDoList.slice(any);
                }
            }
            //$.inArray(taskObj)
            // sync with a cloud application and remove the entry from the database
    }
    
});