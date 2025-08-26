import nodePath from "node:path";
import nodeFs from "node:fs";

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

  private isCreatedSync(): boolean {
    return nodeFs.existsSync(this.FILE_PATH);
  }
}
