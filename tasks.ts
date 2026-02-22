// 1. Our list of tasks (The Array)
let todoList: string[] = ["Clean Room", "Practice Coding", "Feed Cat"];

// 2. A function to show our tasks
function showTasks(tasks: string[]) {
    console.log("--- MY TASK LIST ---");
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]); 
    }
}

// 3. Let's run it!
showTasks(todoList);