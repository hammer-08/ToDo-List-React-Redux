export interface TaskModel {
    id: string;
    creationDateAndTime: string;
    creationTimestamp: string;
    desc: string;
    isDone: boolean;
}

export interface ErrorDto {
    message: string;
    exceptionName: string;
    statusCode: number;
  }