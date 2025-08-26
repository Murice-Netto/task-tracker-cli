export class MissingTaskPropertyError extends Error {
  public constructor(message: string = "Missing required task properties.") {
    super(message);
  }
}
