import { Act } from '../../types';
import { TaskModel } from '../../ApiModels';
import { apiFetch, apiPost } from '../../ApiFetch';

export interface TaskListState {
    taskList: TaskModel[];
}

export const taskListState: TaskListState = {
    taskList: []
};

export function setTasks(value: TaskModel[]): TaskListActions {
    return { type: 'TASK_LIST/SET_TASKS', value: { value } };
}

export type TaskListActions = Act<'TASK_LIST/SET_TASKS', { value: TaskModel[] }>;

export function taskListReducer(
    state: TaskListState = taskListState,
    action: TaskListActions): TaskListState {
    switch (action.type) {
        case 'TASK_LIST/SET_TASKS': return {
            ...state,
            taskList: [...action.value.value]
        }
        default: return state;
    }
}

export async function findAllTasks(): Promise<TaskModel[]> {
    const response = await apiFetch('api/findAllTasks');
    const data = await response.json();
    const tasks = data as TaskModel[];
    return tasks;
}

export async function editTask(request: TaskModel): Promise<string> {
    const response = await apiPost('api/editTask', request);
    return await response.json();
}

export async function deleteTask(taskId: string): Promise<string> {
    const response = await apiPost('api/deleteTask', taskId);
    return await response.json();
}