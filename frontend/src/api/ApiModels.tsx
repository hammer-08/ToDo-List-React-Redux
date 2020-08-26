export interface TaskModel {
    id: string
    description: string
    isDone: boolean
    creationTimestamp: number
    lastEditionTimestamp: number
}

export interface ErrorDto {
    message: string
    exceptionName: string
    statusCode: number
  }