import { TaskModel } from "./ApiModels"
import { apiFetch, apiPost, apiDelete } from "./ApiWrapper"

export async function findAllTasks(): Promise<TaskModel[]> {
    const response = await apiFetch('api/task/findAllTasks')
    return await response.json()
}

export async function editTask(request: TaskModel): Promise<TaskModel[]> {
    const response = await apiPost('api/task', request)
    return await response.json()
}

export async function deleteTaskById(taskId: string): Promise<TaskModel[]> {
    const response = await apiDelete(`api/task/${taskId}`)
    return await response.json()
}