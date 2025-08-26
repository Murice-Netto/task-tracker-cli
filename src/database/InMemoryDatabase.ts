import { Database, DatabaseData } from "./Database.ts";

export class InMemoryDatabase implements Database {
  public constructor(private data: DatabaseData = { tasks: [] }) {}

  // deno-lint-ignore require-await
  public async update(data: DatabaseData): Promise<void> {
    this.data = data;
    return Promise.resolve();
  }

  // deno-lint-ignore require-await
  public async getData(): Promise<DatabaseData> {
    return Promise.resolve(this.data);
  }
}
