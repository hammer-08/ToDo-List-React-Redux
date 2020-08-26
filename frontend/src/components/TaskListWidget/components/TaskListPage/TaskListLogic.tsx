import { Act } from '../../../../types'
import { TaskModel } from '../../../../api/ApiModels'

export interface TaskListState {
    taskList: TaskModel[]
    taskOnEdition?: TaskModel
}

export const taskListInitialState: TaskListState = {
    taskList: [],
}

export type TaskListActions = Act<'TASK_LIST/SET_TASKS', TaskModel[]> |
    Act<'TASK_LIST/SET_EDITING_TASK', TaskModel> |
    Act<'TASK_LIST/CLEAR_EDITING_TASK', void>

export function taskListReducer(
    state: TaskListState = taskListInitialState,
    action: TaskListActions): TaskListState {
    switch (action.type) {
        case 'TASK_LIST/SET_TASKS':
            return {
                ...state,
                taskList: [...action.value]
            }
        case 'TASK_LIST/SET_EDITING_TASK':
            return {
                ...state,
                taskOnEdition: action.value
            }
        case "TASK_LIST/CLEAR_EDITING_TASK":
            return {
                ...state,
                taskOnEdition: undefined
            }
        default:
            return state
    }
}

export function setTasks(value: TaskModel[]): TaskListActions {
    return { type: 'TASK_LIST/SET_TASKS', value: value }
}

export function setEditingTask(value: TaskModel): TaskListActions {
    return { type: 'TASK_LIST/SET_EDITING_TASK', value: value }
}

export function clearEditingTask(): TaskListActions {
    return { type: 'TASK_LIST/CLEAR_EDITING_TASK', value: undefined }
}