import { addTask } from "./commands/addTask.ts";
import { deleteTask } from "./commands/deleteTask.ts";
import { listTasks } from "./commands/listTasks.ts";
import { markDone } from "./commands/markDone.ts";
import { markInProgress } from "./commands/markInProgress.ts";
import { updateTask } from "./commands/updateTask.ts";
import { TaskService } from "./service/Task.service.ts";

import { Cli } from "./utils/Cli.ts";
import { Database } from "./utils/Database.ts";

function main() {
  const jsonDatabase: Database = new Database();
  const taskService: TaskService = new TaskService(jsonDatabase);
  const app: Cli = new Cli(taskService);
  app.addCommand(addTask).addCommand(deleteTask).addCommand(listTasks)
    .addCommand(markDone).addCommand(markInProgress).addCommand(updateTask);
  app.run(Deno.args);
}

if (import.meta.main) {
  main();
}
