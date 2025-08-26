import nodePath from "node:path";
import nodeFs from "node:fs";

import { Task } from "../entities/Task.ts";

export type DatabaseData = {
  tasks: Task[];
};

export class JsonDatabase {
  private FILE_NAME: string = "db.json";
  private FILE_PATH: string = nodePath.join("./", this.FILE_NAME);
  private FILE_CONTENT: string = `{ "tasks": [] }`;

  public createIfNotExistsSync() {
    if (this.isCreatedSync()) return;
    try {
      nodeFs.writeFileSync(this.FILE_PATH, this.FILE_CONTENT);
    } catch (e) {
      console.error(e);
    }
  }

  public update(newData: DatabaseData): void {
    if (!this.isCreatedSync()) throw new Error("Database file not found.");
    try {
      nodeFs.writeFileSync(this.FILE_PATH, JSON.stringify(newData));
    } catch (e) {
      console.error(e);
    }
  }

  public get data(): DatabaseData {
    if (!this.isCreatedSync()) throw new Error("Database file not found.");
    const content: string = nodeFs.readFileSync(this.FILE_PATH, {
      encoding: "utf-8",
    });
    return JSON.parse(content) as DatabaseData;
  }

  public get lastInsertedId(): number {
    return this.data.tasks[this.data.tasks.length - 1].id || 0;
  }

  private isCreatedSync(): boolean {
    return nodeFs.existsSync(this.FILE_PATH);
  }
}
