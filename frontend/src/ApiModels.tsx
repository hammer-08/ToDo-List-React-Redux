export interface TaskModel {
    taskId: string;
    creationDateAndTime: string;
    creationTimestamp: string;
    description: string;
    done: boolean;
}

export interface ErrorDto {
    message: string;
    exceptionName: string;
    statusCode: number;
  }