var tasks = ["Mow the lawn", "Take time for prayers", "Get a haircut", "Conceive final project", "Ask that girl out, finally", "Visit museum", "Buy materials for class"];

document.write('<ul class="list-group">');

for(var j=0; j < tasks.length; j++) {

console.log(tasks[j]);
document.write('<li class="list-group-item">' + tasks[i] + '</li>');

}

document.write('</ul');