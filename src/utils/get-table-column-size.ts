import { Task } from "../entities/Task.ts";
import { getObjectPropertyByKey } from "./get-property-from-object.ts";

export function getColumnWidth(tasks: Task[], key: keyof Task, header: string) {
  return Math.max(
    header.length,
    ...tasks.map((task) => String(getObjectPropertyByKey(task, key)).length),
  ) + 2;
}
