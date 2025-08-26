import { InvalidDataError } from "../errors/InvalidDataError.ts";
import { MissingTaskPropertyError } from "../errors/MissingTaskPropertyError.ts";

import { TaskStatus } from "../entities/TaskStatus.ts";
import { Command, CommandHandler } from "../entities/Command.ts";
import { TaskService } from "../service/TaskService.ts";

const handler: CommandHandler = async (
  args: string[],
  service: TaskService,
): Promise<void> => {
  if (args.length < 1) throw new MissingTaskPropertyError("Missing task id.");
  const id = Number(args[0]);
  if (isNaN(id)) throw new InvalidDataError("Id must be a number.");
  await service.updateStatus(id, TaskStatus.DONE);
  console.log("✅ Task status updated!");
};

export const maskTaskAsDoneCMD: Command = {
  name: "mark-done",
  description: "marks a task's status as done",
  example: "task-tracker mark-done [ID]",
  exec: handler,
};
