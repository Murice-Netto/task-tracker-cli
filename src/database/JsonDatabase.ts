import { Database, DatabaseData } from "./Database.ts";

export class JsonDatabase implements Database {
  private FILE_NAME: string = "db.json";
  private FILE_PATH: string = `./${this.FILE_NAME}`;
  private FILE_CONTENT: string = `{ "tasks": [] }`;
  private FILE_ENCONDER: TextEncoder = new TextEncoder();
  private FILE_DECONDER: TextDecoder = new TextDecoder("utf-8");

  public async createDbFile() {
    if (await this.isCreated()) return;
    try {
      await Deno.writeFile(
        this.FILE_PATH,
        this.FILE_ENCONDER.encode(this.FILE_CONTENT),
      );
    } catch (e) {
      throw e;
    }
  }

  public async update(data: DatabaseData): Promise<void> {
    if (!this.isCreated()) await this.createDbFile();
    try {
      await Deno.writeFile(
        this.FILE_PATH,
        this.FILE_ENCONDER.encode(JSON.stringify(data)),
      );
    } catch (e) {
      throw e;
    }
  }

  public async getData(): Promise<DatabaseData> {
    if (!await this.isCreated()) await this.createDbFile();
    const content: string = this.FILE_DECONDER.decode(
      await Deno.readFile(this.FILE_PATH),
    );
    return JSON.parse(content) as DatabaseData;
  }

  private async isCreated(): Promise<boolean> {
    return (await Deno.stat(this.FILE_PATH)).isFile;
  }
}
