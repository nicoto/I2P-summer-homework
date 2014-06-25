var toDoList = ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9", "task10"];

document.write("<ul class='toDoTaskList'>");

for(i=0; i<toDoList.length; i++) {
document.writeln("<li class='taskItem'>" + toDoList[i] + "</li>");  
}

document.write("</ul>");