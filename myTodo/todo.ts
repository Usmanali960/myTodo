import inquirer from "inquirer";

let ourTodo:string[] = [];
let condition:boolean = true;

while(condition)
{let todoChoices = await inquirer.prompt([
    {
        type:"input",
        name: "choices",
        message :"what items you can add in your todo"
    },
    {
        type : "confirm",
        name : "addMore",
        message : "Do you want to add some more items in your toddo",
        default : "false"
    }
])

ourTodo.push(todoChoices.choices);
condition = todoChoices.addMore;
console.log(ourTodo);

}