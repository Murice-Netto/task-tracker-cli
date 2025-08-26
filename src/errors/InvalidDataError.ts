export class InvalidDataError extends Error {
  public constructor(message: string = "Invalid data.") {
    super(message);
  }
}
