import { Command } from "../entities/Command.ts";
import { Task } from "../entities/Task.ts";
import { TaskService } from "../service/Task.service.ts";

export const listTasks: Command = {
  name: "list",
  description: "",
  exec: (args: string[], service: TaskService) => {
    let tasks: Task[] = service.getAll();
    if (args.length > 0) {
      const status: string = args[0];
      tasks = service.getAll(status);
    }
    console.log(tasks);
  },
};
