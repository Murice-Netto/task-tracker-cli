import { Command } from "../entities/Command.ts";

export class Cli {
  private commands: Command[] = [];

  public addCommand(): Cli {
    return this;
  }

  public run(args: string[]): void {
    if (args.length < 1) throw new Error("Missing a command.");
    const command: string = args[0];
    for (const cmd of this.commands) {
      if (cmd.name === command) {
        cmd.exec(args);
        return;
      }
    }
    throw new Error("Command not registered");
  }
}
