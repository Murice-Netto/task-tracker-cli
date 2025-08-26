import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/Task.service.ts";

export const markDone: Command = {
  name: "mark-done",
  description: "",
  exec: (args: string[], service: TaskService) => {
    if (args.length < 1) throw new Error("Missing task id.");
    const id = Number(args[0]);
    service.updateStatus(id, "DONE");
    console.log("Task status updated!");
  },
};
