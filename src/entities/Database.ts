import { Task } from "./Task.ts";

export type DatabaseData = {
  tasks: Task[];
};

export class Database {
  private FILE_NAME: string = "db.json";
  private FILE_PATH: string = `./${this.FILE_NAME}`;
  private FILE_CONTENT: string = `{ "tasks": [] }`;
  private FILE_ENCONDER: TextEncoder = new TextEncoder();
  private FILE_DECONDER: TextDecoder = new TextDecoder("utf-8");

  public async createIfNotExists() {
    if (await this.isCreated()) return;
    try {
      await Deno.writeFile(
        this.FILE_PATH,
        this.FILE_ENCONDER.encode(this.FILE_CONTENT),
      );
    } catch (e) {
      console.error(e);
    }
  }

  public async update(data: DatabaseData): Promise<void> {
    if (!this.isCreated()) throw new Error("Database file not found.");
    try {
      await Deno.writeFile(
        this.FILE_PATH,
        this.FILE_ENCONDER.encode(JSON.stringify(data)),
      );
    } catch (e) {
      console.error(e);
    }
  }

  public async getData(): Promise<DatabaseData> {
    if (!await this.isCreated()) {
      throw new Error("Database file not found.");
    }
    const content: string = this.FILE_DECONDER.decode(
      await Deno.readFile(this.FILE_PATH),
    );
    return JSON.parse(content) as DatabaseData;
  }

  public async getLastInsertedID(): Promise<number> {
    const data = await this.getData();
    return data.tasks[data.tasks.length - 1].id || 0;
  }

  private async isCreated(): Promise<boolean> {
    return (await Deno.stat(this.FILE_PATH)).isFile;
  }
}
