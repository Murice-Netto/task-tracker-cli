import { addTask } from "./commands/addTask.ts";
import { TaskService } from "./service/Task.service.ts";

import { Cli } from "./utils/Cli.ts";
import { JsonDatabase } from "./utils/Database.ts";

function main() {
  const jsonDatabase: JsonDatabase = new JsonDatabase();
  const taskService: TaskService = new TaskService(jsonDatabase);
  const app: Cli = new Cli(taskService);
  app.addCommand(addTask);
  app.run(Deno.args);
}

if (import.meta.main) {
  main();
}
