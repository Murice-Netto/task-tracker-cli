import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/Task.service.ts";

export const markInProgress: Command = {
  name: "mark-in-progress",
  description: "",
  exec: (args: string[], service: TaskService) => {
    if (args.length < 1) throw new Error("Missing task id.");
    const id = Number(args[0]);
    service.updateStatus(id, "IN-PROGRESS");
    console.log("Task status updated!");
  },
};
