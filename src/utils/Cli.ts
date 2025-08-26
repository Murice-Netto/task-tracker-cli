import { Command } from "../entities/Command.ts";
import { TaskService } from "../service/TaskService.ts";

export class Cli {
  private commands: Command[];
  private service: TaskService;

  public constructor(service: TaskService) {
    this.service = service;
    this.commands = [];
  }

  public addCommand(command: Command): Cli {
    this.commands.push(command);
    return this;
  }

  public run(args: string[]): void {
    if (args.length < 1) throw new Error("Missing a command.");
    const command: string = args[0];
    for (const cmd of this.commands) {
      if (cmd.name === command) {
        try {
          cmd.exec(args.slice(1), this.service);
          return;
        } catch (e) {
          console.error(e);
          Deno.exit(1);
        }
      }
    }
    throw new Error("Command not registered");
  }
}
