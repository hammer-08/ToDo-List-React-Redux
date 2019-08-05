export interface TaskModel {
    taskId: string;
    creationDateAndTime: string;
    creationTimestamp: string;
    value: string;
    done: boolean;
}

export interface ErrorDto {
    message: string;
    exceptionName: string;
    statusCode: number;
  }