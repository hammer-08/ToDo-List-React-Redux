export interface TaskModel {
    id: string;
    creationDateAndTime: string;
    creationTimestamp: string;
    desc: string;
    done: boolean;
}

export interface ErrorDto {
    message: string;
    exceptionName: string;
    statusCode: number;
  }