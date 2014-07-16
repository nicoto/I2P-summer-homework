{"changed":true,"filter":false,"title":"hw5_todolist.js","tooltip":"/js/hw5_todolist.js","value":"    // This is just a placeholder date for the purpoose of filling the object.\n    var tempDate = new Date();\n    \n    // Place outside of the document.ready statement; it needs to be a global variable.\n    var toDoList = [{\n        'name': 'Clean room',\n        'dueDate': tempDate,\n        'complete': true\n    }, {\n        'name': 'Grocery shop',\n        'dueDate': tempDate,       \n        'complete': true\n    }, {\n        'name': 'Get an oil change',\n        'dueDate': tempDate,         \n        'complete': false\n    }, {\n        'name': 'Do course homework',\n        'dueDate': tempDate,         \n        'complete': true\n    }, {\n        'name': 'Get a haircut',\n        'dueDate': tempDate,         \n        'complete': true\n    }];\n    \n$(document).ready(function () {\n\n    /* Event listener in order to mark off a task as complete\n    $('.checkoff').on('dbclick', function(evt){\n    }) */\n    \n    // Listen for a click on a new archive button that lives outside the list to removeCompleted() \n    $('#archive').on('click', function(){\n        removeCompleted();\n    });\n    \n    // bind AddTask() to a form with fields where users can fill out a name and hit submit    \n    $('#submitNew').on('click', function(){\n        var newTaskInput = $('.form-control').val();\n        \n        // Use constructor to add the new task\n        var positionOfTask = addTask(newTaskInput);\n        \n        // Then change the status of complete from false to true to TEST reprinting function\n        toDoList[positionOfTask].complete = true;\n        console.log(\"Checking status here: \" + toDoList[positionOfTask].complete);  // test output\n        \n    });\n    \n    // Unordered list element of class ***taskListGroup***\n    $('.panel-body').append('<ul class=\"taskListGroup\"></ul>');\n\n    // Some error handling with a call to output tasks in the HTML of hw5_todolist.html\n    for (var i = 0; i in toDoList; i++) {\n        try {\n            printTask(toDoList[i], i);\n        } catch (error) {\n            console.log(\"One of the tasks in your to-do-list is incomplete; \" + error);\n        }\n    }\n\n    function printTask(taskObj, i) {\n        console.log(taskObj);\n        // This conditional makes the counter argument passed into the function, as called, optional. Not this was originally written: if (counter===null) counter=0; \n        var counter = i || 0;\n\n        if (taskObj.name === undefined) {\n            throw \"You are missing a task name; what cannot be identified or named, can hardly be done.\";\n        }\n\n        if (taskObj.complete === true) { // or you can write taskObj['complete']\n            $('.taskListGroup').append(\"<a href='#' class='checkoff' id='checkoff\" + i + \"'><li class='taskCompleted' id='litem-\" + counter + \"'></li></a>\");\n\n            var strTempID = 'li#litem-' + counter;\n            $(strTempID).text(taskObj.name).append(\"&nbsp;&nbsp;<i class='glyphicon glyphicon-ok'></i>\");\n            $(strTempID).css(\"color\", \"green\");\n\n        }\n    }\n\n    /* The function (addTask) calls newTask() and adds the object returned from that function to the array \n    where we keep the rest of our task objects. Once done, we re-render the list HTML.*/\n    function addTask(needs2Bdone) {\n\n        var theTask = new Task(needs2Bdone); // constructor call\n        console.log(\"The task at hand is: \" + theTask.name + \", \" + theTask.dueDate + \", \" + theTask.complete);\n        toDoList.push(theTask); // adds the object to the ToDoListarray\n        console.log(\"You successfully added the new task object to your array.\");\n        printTask(theTask);\n        \n        // Trying to return the position or index of the new item in the array!\n        console.log(toDoList.indexOf(theTask));\n        return toDoList.indexOf(theTask);\n        \n    }\n\n   function Task(name) { // a constructor function\n        var todaysDate = new Date();\n        this.dueDate = dueNextWeek(todaysDate);\n        console.log(this.dueDate); //OUTPUT to determine whether dueNextWeek runs correctly\n        this.name = name || 'test'; // this statement indicates an optional constructor function parameter\n        this['complete'] = false; // rather than this.complete because complete is a key word.\n        var taskObj = {\n            'name': this.name,\n            'dueDate': this.dueDate,\n            'complete': this.complete\n        };\n        // Later, you may test to see if the object toDoList exists and whether or not it might be empty. Does the array exist, written as so: if (typeof toDoList == \"undefined\"){}\n        return taskObj;\n    }\n\n    function dueNextWeek(dueDate) {\n        dueDate.setDate(dueDate.getDate() + 7);\n        console.log(\"One week from today is \" + dueDate);\n        return dueDate;\n    }\n\n    // Function call\n    addTask(\"Go running\");\n\n    function removeCompleted() { //slice and splice\n            $('li.taskCompleted').remove(); // just to affect the HTML of the page and the task object can stay the same.\n            \n            console.log(\"You have removed a list item in your HTML\");\n            // Remove any completed object entry from the toDoList array\n            for(var any=0; any <toDoList.length; any++){\n                if(toDoList[any].complete===true){\n                    console.log(\"The item \" + toDoList[any].name + \" ought to be removed.\");\n                    toDoList.slice(any);\n                }\n            }\n            //$.inArray(taskObj)\n            // sync with a cloud application and remove the entry from the database\n    }\n    \n});","undoManager":{"mark":1,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":46,"column":45},"end":{"row":46,"column":46}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":46,"column":46},"end":{"row":46,"column":47}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":64},"end":{"row":44,"column":65}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":65},"end":{"row":44,"column":66}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":66},"end":{"row":44,"column":67}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":67},"end":{"row":44,"column":68}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":68},"end":{"row":44,"column":69}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":69},"end":{"row":44,"column":70}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":70},"end":{"row":44,"column":71}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":71},"end":{"row":44,"column":72}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":72},"end":{"row":44,"column":73}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":73},"end":{"row":44,"column":74}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":74},"end":{"row":44,"column":75}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":75},"end":{"row":44,"column":76}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":76},"end":{"row":44,"column":77}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":77},"end":{"row":44,"column":78}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":78},"end":{"row":44,"column":79}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":79},"end":{"row":44,"column":80}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":79},"end":{"row":44,"column":80}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":78},"end":{"row":44,"column":79}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":77},"end":{"row":44,"column":78}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":76},"end":{"row":44,"column":77}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":75},"end":{"row":44,"column":76}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":74},"end":{"row":44,"column":75}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":73},"end":{"row":44,"column":74}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":73},"end":{"row":44,"column":74}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":74},"end":{"row":44,"column":75}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":75},"end":{"row":44,"column":76}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":76},"end":{"row":44,"column":77}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":77},"end":{"row":44,"column":78}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":78},"end":{"row":44,"column":79}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":79},"end":{"row":44,"column":80}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":80},"end":{"row":44,"column":81}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":81},"end":{"row":44,"column":82}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":82},"end":{"row":44,"column":83}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":83},"end":{"row":44,"column":84}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":84},"end":{"row":44,"column":85}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":85},"end":{"row":44,"column":86}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":86},"end":{"row":44,"column":87}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":87},"end":{"row":44,"column":88}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":88},"end":{"row":44,"column":89}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":89},"end":{"row":44,"column":90}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":90},"end":{"row":44,"column":91}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":91},"end":{"row":44,"column":92}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":40},"end":{"row":50,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":50,"column":0},"end":{"row":50,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":8},"end":{"row":50,"column":9}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":9},"end":{"row":50,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":10},"end":{"row":50,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":11},"end":{"row":50,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":50,"column":11},"end":{"row":50,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":11},"end":{"row":50,"column":12}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":12},"end":{"row":50,"column":13}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":13},"end":{"row":50,"column":14}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":14},"end":{"row":50,"column":15}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":15},"end":{"row":50,"column":16}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":16},"end":{"row":50,"column":17}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":17},"end":{"row":50,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":18},"end":{"row":50,"column":19}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":19},"end":{"row":50,"column":21}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":20},"end":{"row":50,"column":22}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":21},"end":{"row":50,"column":22}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":22},"end":{"row":50,"column":23}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":23},"end":{"row":50,"column":24}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":24},"end":{"row":50,"column":25}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":25},"end":{"row":50,"column":26}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":26},"end":{"row":50,"column":27}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":27},"end":{"row":50,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":28},"end":{"row":50,"column":29}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":29},"end":{"row":50,"column":30}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":30},"end":{"row":50,"column":31}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":31},"end":{"row":50,"column":32}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":32},"end":{"row":50,"column":33}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":33},"end":{"row":50,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":34},"end":{"row":50,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":35},"end":{"row":50,"column":36}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":36},"end":{"row":50,"column":37}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":37},"end":{"row":50,"column":38}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":38},"end":{"row":50,"column":39}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":39},"end":{"row":50,"column":40}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":40},"end":{"row":50,"column":41}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":41},"end":{"row":50,"column":42}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":42},"end":{"row":50,"column":43}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":43},"end":{"row":50,"column":44}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":44},"end":{"row":50,"column":45}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":45},"end":{"row":50,"column":46}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":46},"end":{"row":50,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":47},"end":{"row":50,"column":48}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":48},"end":{"row":50,"column":49}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":49},"end":{"row":50,"column":50}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":50},"end":{"row":50,"column":51}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":51},"end":{"row":50,"column":52}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":52},"end":{"row":50,"column":53}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":55},"end":{"row":50,"column":56}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":8},"end":{"row":48,"column":9}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":48,"column":9},"end":{"row":48,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":62,"column":9},"end":{"row":62,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":62,"column":10},"end":{"row":62,"column":11}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":48,"column":8},"end":{"row":48,"column":10}},"text":"/*"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":62,"column":9},"end":{"row":62,"column":11}},"text":"*/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":9}},"text":"        }"},{"action":"removeLines","range":{"start":{"row":48,"column":0},"end":{"row":62,"column":0}},"nl":"\n","lines":["        // First, remove all items from the to do list","        $('li.taskCompleted').remove(); ","        console.log(\"All lis ought to be removed now.\");","        ","        // Unordered list element of class ***taskListGroup***","        $('.panel-body').append('<ul class=\"taskListGroup\"></ul>');","        ","        // reRender the HTML - eventually, break this out into a separate function","        for (var i = 0; i in toDoList; i++) {","            try {","                printTask(toDoList[i], i);","            } catch (error) {","                console.log(\"One of the tasks in your to-do-list is incomplete; \" + error);","            }"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":48,"column":0},"end":{"row":48,"column":8}},"text":"        "},{"action":"removeText","range":{"start":{"row":47,"column":8},"end":{"row":48,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":1097.5,"scrollleft":1.5,"selection":{"start":{"row":47,"column":8},"end":{"row":47,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":67,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1405544123259}