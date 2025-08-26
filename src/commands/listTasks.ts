import { Command, CommandHandler } from "../entities/Command.ts";

import { Task } from "../entities/Task.ts";
import { TaskStatus } from "../entities/TaskStatus.ts";
import { TaskService } from "../service/TaskService.ts";

import { center } from "../utils/center-text.ts";
import { getColumnWidth } from "../utils/get-table-column-size.ts";

// deno-lint-ignore require-await
const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  let tasks: Task[] = service.getAll();
  if (args.length > 0) {
    const status: TaskStatus = args[0] as TaskStatus;
    tasks = service.getAll(status);
  }
  if (tasks.length === 0) {
    console.log("❌ No tasks found.");
    Deno.exit(1);
  }
  const title = "[ TASKS ]";
  const idWidth = getColumnWidth(tasks, "id", "ID");
  const descriptionWidth = getColumnWidth(tasks, "description", "DESCRIPTION");
  const statusWidth = getColumnWidth(tasks, "status", "STATUS");
  const width = descriptionWidth + 50;
  center(width, title);
  console.log(
    "ID".padEnd(idWidth) +
      "STATUS".padEnd(statusWidth) +
      "DESCRIPTION".padEnd(descriptionWidth) +
      "CREATED_AT",
  );
  for (const task of tasks) {
    console.log(
      `${task.id}`.padEnd(idWidth) +
        `${task.status}`.padEnd(statusWidth) +
        `${task.description}`.padEnd(descriptionWidth) +
        `${task.createdAt}`,
    );
  }
  center(width, "-");
};

export const listTasksCMD: Command = {
  name: "list",
  description: "list all tasks, or tasks with a matching status",
  example: "task-tracker list [done, in-progress, todo]",
  exec: handler,
};
