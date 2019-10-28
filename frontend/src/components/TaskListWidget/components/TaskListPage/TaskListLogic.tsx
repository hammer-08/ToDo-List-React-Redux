import {Act} from '../../../../types';
import {TaskModel} from '../../../../ApiModels';
import {apiFetch, apiPost} from '../../../../ApiFetch';
import uuid from "uuid";

export interface TaskListState {
    taskList: TaskModel[];
    editingTask?: TaskModel;
    showCreateModal: boolean;
}

export const taskListInitialState: TaskListState = {
    taskList: [],
    showCreateModal: false
};

export const newTask: TaskModel = {
    taskId: uuid(),
    done: false,
    // creationDateAndTime: moment().toString(),
    //creationTimestamp: moment().utc.toString(),
    description: '',
    creationDateAndTime: '',
    creationTimestamp: ''
}

export type TaskListActions = Act<'TASK_LIST/SET_TASKS', TaskModel[]> |
    Act<'TASK_LIST/CHANGE_EDITING_TASK', TaskModel> |
    Act<'TASK_LIST/SUBMIT_CREATION', void> |
    Act<'TASK_LIST/CANCEL_CREATION', void> |
    Act<'TASK_LIST/OPEN_CREATION_MODAL', void> |
    Act<'TASK_LIST/CLOSE_CREATION_MODAL', void> |
    Act<'TASK_LIST/SUBMIT_EDITION', void> |
    Act<'TASK_LIST/CANCEL_EDITION', void>;

export function setTasks(value: TaskModel[]): TaskListActions {
    return {type: 'TASK_LIST/SET_TASKS', value: value};
}

export function changeEditingTask(value: TaskModel): TaskListActions {
    return {type: 'TASK_LIST/CHANGE_EDITING_TASK', value: value};
}

export function openCreationModal(): TaskListActions {
    return {type: 'TASK_LIST/OPEN_CREATION_MODAL', value: undefined};
}

export function closeCreationModal(): TaskListActions {
    return {type: 'TASK_LIST/CLOSE_CREATION_MODAL', value: undefined};
}

export function submitCreation(): TaskListActions {
    return {type: 'TASK_LIST/SUBMIT_CREATION', value: undefined};
}

export function cancelCreation(): TaskListActions {
    return {type: 'TASK_LIST/CANCEL_CREATION', value: undefined};
}

export function submitEdition(): TaskListActions {
    return {type: 'TASK_LIST/SUBMIT_EDITION', value: undefined};
}

export function cancelEdition(): TaskListActions {
    return {type: 'TASK_LIST/CANCEL_EDITION', value: undefined};
}

export function taskListReducer(
    state: TaskListState = taskListInitialState,
    action: TaskListActions): TaskListState {
    switch (action.type) {
        case 'TASK_LIST/SET_TASKS':
            return {
                ...state,
                taskList: [...action.value]
            };
        case 'TASK_LIST/CHANGE_EDITING_TASK':
            return {
                ...state,
                editingTask: action.value
            };
        case "TASK_LIST/OPEN_CREATION_MODAL": {
            return {
                ...state,
                showCreateModal: true
            }
        }
        case "TASK_LIST/CLOSE_CREATION_MODAL": {
            return {
                ...state,
                showCreateModal: false
            }
        }
        case "TASK_LIST/CANCEL_CREATION":
            return {
                ...state,
                editingTask: undefined
            };
        case "TASK_LIST/SUBMIT_CREATION":
            if (state.editingTask) {
                const taskList = [...state.taskList];
                taskList.push(state.editingTask);

                return {
                    ...state,
                    taskList: taskList
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}

export async function findAllTasks(): Promise<TaskModel[]> {
    const response = await apiFetch('api/findAllTasks');
    const data = await response.json();
    return data as TaskModel[];
}

export async function editTask(request: TaskModel): Promise<string> {
    const response = await apiPost('api/editTask', request);
    return await response.json();
}

export async function deleteTaskById(taskId: string): Promise<string> {
    const response = await apiPost('api/deleteTask', taskId);
    return await response.json();
}