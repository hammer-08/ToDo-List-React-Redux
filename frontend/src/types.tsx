import { TaskListState } from "./components/TaskListWidget/components/TaskListPage/TaskListLogic";

export interface Act<T extends string, V> {
    type: T;
    value: V;
}

export interface StateType {
    taskList: TaskListState;
}