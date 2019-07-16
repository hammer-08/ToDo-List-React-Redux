import { Act } from '../../types';
import { Task } from '../../ApiModels';

export interface TaskListState {
    taskList: Task[];
}

export const taskListState: TaskListState = {
    taskList: []
};

export function submitCreation(value: Task): TaskListActions {
    return { type: 'TASK_LIST/SUBMIT_CREATION', value: { value } };
}

export function submitEdition(value: Task[]): TaskListActions {
    return { type: 'TASK_LIST/SUBMIT_EDITION', value: { value } };
}

export function makeDone(value: Task[]): TaskListActions {
    return { type: 'TASK_LIST/MAKE_DONE', value: { value } };
}

export type TaskListActions = Act<'TASK_LIST/SUBMIT_CREATION', { value: Task }> |
    Act<'TASK_LIST/MAKE_DONE', { value: Task[] }> | Act<'TASK_LIST/SUBMIT_EDITION', { value: Task[] }>;

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