import { TaskModel } from "./ApiModels"
import { apiFetch, apiPost } from "./ApiWrapper"

export async function findAllTasks(): Promise<TaskModel[]> {
    const response = await apiFetch('api/findAllTasks')
    return await response.json()
}

export async function editTask(request: TaskModel): Promise<string> {
    const response = await apiPost('api/editTask', request)
    return await response.json()
}

export async function deleteTaskById(taskId: string): Promise<string> {
    const response = await apiPost('api/deleteTask', taskId)
    return await response.json()
}