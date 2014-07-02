    var toDoList = [
    {'name': 'Clean room', 'complete' : true},
    {'name': 'Grocery shop', 'complete' : true},
    {'name': 'Get an oil change', 'complete' : false},
    {'name': 'Do course homework', 'complete' : true},
    {'name': 'Get a haircut', 'complete' : false}
    ];
    
$(document).ready(function() {

    // Create the unordered list element
    $(".panel-body").add("ul").addClass("toDoTaskList");

    for(var i=0; i in toDoList; i++) {
    try{
        printTask(toDoList[i], i);
    }
    catch(error) {
        console.log("One of the tasks in your to-do-list is incomplete; " + error);
    }
    }
    
    function printTask(taskObj, counter) {
        var $lis = $( "li" );
        console.log(taskObj.name === undefined);
        if(taskObj.name === undefined) {
            throw "Alas, what cannot be identified or named, can hardly be done.";
        }
        console.log(taskObj);
        if(taskObj['complete']) { // or you can write if(taskObj.complete === true) / taskObj['complete']
            $(".toDoTaskList").append("<li class='taskItem' id='litem-" + counter + "'></li>");
            $lis.eq( counter ).html(taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i>');
            //$('#litem'+counter).html(taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i>');
            $lis.eq( counter ).css( "color", "green" );
            
            //document.getElementById(lid).textContent = taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i>';
            // HW2: document.write('<li class="taskItem">' + taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i></li>');
        }
        else {
            $(".toDoTaskList").append("<li class='taskItem' id='litem-" + counter + "'></li>");
            $lis.eq( counter ).html(taskObj.name);
            //$("#litem"+counter).html(taskObj.name);
            //document.getElementById(lid).textContent = taskObj.name + '&nbsp;&nbsp;<i class="glyphicon glyphicon-ok"></i>';
            // HW2: document. write('<li class="taskItem">'+ taskObj.name + '</li>');
        }
    }
    
    function removeTask(taskObj, index) {
        $.inArray(taskObj)
    }
    // JQUERY HERE TO GENERATE HTML
    // $(".toDoTaskList").append("<li class='taskItem'></li>");
    // $('.taskItem').text('abc');
});
