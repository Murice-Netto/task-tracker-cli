import { TaskService } from "./service/Task.service.ts";
import { JsonDatabase } from "./utils/Database.ts";

function main() {
  console.log("Hello, World!");
  const db = new JsonDatabase();
  db.createIfNotExistsSync();
  console.log(db.data);
  const service = new TaskService(db);
  service.deleteTask(0);
  console.log(db.data);
}

if (import.meta.main) {
  main();
}
