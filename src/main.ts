import { addTaskCMD } from "./commands/addTaskCMD.ts";
import { deleteTaskCMD } from "./commands/deleteTaskCMD.ts";
import { listTasksCMD } from "./commands/listTasks.ts";
import { maskTaskAsDoneCMD } from "./commands/markDone.ts";
import { markTaskAsInProgressCMD } from "./commands/markInProgress.ts";
import { updateTaskCMD } from "./commands/updateTask.ts";
import { TaskService } from "./service/TaskService.ts";

import { Cli } from "./entities/Cli.ts";
import { Database } from "./entities/Database.ts";

async function main() {
  const jsonDatabase: Database = new Database();
  const taskService: TaskService = new TaskService(
    jsonDatabase,
    await jsonDatabase.getData(),
  );
  const app: Cli = new Cli(taskService);
  app.addCommand(addTaskCMD).addCommand(deleteTaskCMD).addCommand(listTasksCMD)
    .addCommand(maskTaskAsDoneCMD).addCommand(markTaskAsInProgressCMD)
    .addCommand(
      updateTaskCMD,
    );
  app.run(Deno.args);
}

if (import.meta.main) {
  await main();
}
