export class Task {
  public id: number;
  public description: string;
  public status: string;
  public createdAt: Date;
  public updatedAt?: Date;

  public constructor(description: string) {
    this.id = 0;
    this.description = description;
    this.status = "a";
    this.createdAt = new Date();
  }
}
