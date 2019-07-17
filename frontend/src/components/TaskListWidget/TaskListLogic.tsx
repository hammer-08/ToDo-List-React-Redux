import { Act } from '../../types';
import { TaskModel } from '../../ApiModels';
import { apiFetch, apiPost } from '../../ApiFetch';

export interface TaskListState {
    taskList: TaskModel[];
}

export const taskListState: TaskListState = {
    taskList: []
};

/*export function submitCreation(value: string): TaskListActions {
    return { type: 'TASK_LIST/SUBMIT_CREATION', value: { value } };
}*/

export function submitEdition(value: TaskModel[]): TaskListActions {
    return { type: 'TASK_LIST/SUBMIT_EDITION', value: { value } };
}

export function makeDone(value: TaskModel[]): TaskListActions {
    return { type: 'TASK_LIST/MAKE_DONE', value: { value } };
}

export type TaskListActions = Act<'TASK_LIST/SUBMIT_CREATION', { value: TaskModel }> |
    Act<'TASK_LIST/MAKE_DONE', { value: TaskModel[] }> | Act<'TASK_LIST/SUBMIT_EDITION', { value: TaskModel[] }>;

export function taskListReducer(
    state: TaskListState = taskListState,
    action: TaskListActions): TaskListState {
    switch (action.type) {
        case 'TASK_LIST/SUBMIT_CREATION': return {
            ...state,
            taskList: state.taskList.concat(action.value.value)
        };
        case 'TASK_LIST/MAKE_DONE': return {
            ...state,
            taskList: [...action.value.value]
        };
        case 'TASK_LIST/SUBMIT_EDITION': return {
            ...state,
            taskList: [...action.value.value]
        }
        default: return state;
    }
}

export async function findAllTasks(): Promise<string> {
    const response = await apiFetch('/findAllTasks');
    return await response.json();
}

export async function addTask(request: TaskModel): Promise<String> {
    const response = await apiPost('/addTask', request);
    return await response.json();
}

export async function editTask(request: TaskModel): Promise<string> {
    const response = await apiPost('/editTask', request);
    return await response.json();
}

export async function deleteTask(taskId: string): Promise<string> {
    const response = await apiPost('/deleteTask', taskId);
    return await response.json();
}