import { TaskService } from "../service/TaskService.ts";

export type CommandHandler = (
  args: string[],
  service: TaskService,
) => Promise<void>;

export type Command = {
  name: string;
  description: string;
  example: string;
  exec: CommandHandler;
};
