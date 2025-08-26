import { MissingTaskPropertyError } from "../errors/MissingTaskPropertyError.ts";

import { Command, CommandHandler } from "../entities/Command.ts";
import { TaskService } from "../service/TaskService.ts";

const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  if (args.length < 1) throw new MissingTaskPropertyError("Missing task id.");
  const id = Number(args[0]);
  await service.delete(id);
  console.log("✅ Task deleted!");
};

export const deleteTaskCMD: Command = {
  name: "delete",
  description: "deletes a task from the database",
  example: "task-tracker delete [ID]",
  exec: handler,
};
