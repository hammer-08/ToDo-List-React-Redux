import { TaskListState } from "./components/TaskListWidget/TaskListLogic";

export interface Act<T extends string, V> {
    type: T;
    value: V;
}

export interface StateType {
    taskList: TaskListState;
}