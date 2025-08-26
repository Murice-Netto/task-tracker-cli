export type Task = {
  id: number;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
};
