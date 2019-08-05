import * as React from 'react';
import { connect } from 'react-redux';
import TaskListComponent from './components/TaskListComponent';
import { StateType } from '../../types';
import { Dispatch } from 'redux';
import { TaskModel } from '../../ApiModels';
import {
    TaskListActions,
    setTasks,
    editTask,
    findAllTasks,
    deleteTask
} from './TaskListLogic';
import uuid from 'uuid';
import moment from 'moment';

interface StateToProps {
    taskList: TaskModel[];
}

interface DispatchProps {
    setTasks(value: TaskModel[]): void;
}

type Props = StateToProps & DispatchProps;

class TaskListContainer extends React.Component<Props> {

    setTasks = async () => {
        const tasks = await findAllTasks();
        this.props.setTasks(tasks);
    }

    handleSubmitCreation = async(text: string) => {
        const task: TaskModel = {
            taskId: uuid(),
            done: false,
            creationDateAndTime: moment().toString(),
            creationTimestamp: moment().utc.toString(),
            value: text
        }
        await editTask(task);
        this.setTasks();
    }

    handleSubmitEdition = async(task: TaskModel, text: string) => {
        if (!task) {
            return;
        }

        const newTask: TaskModel = {
            ...task,
            value: text
        }
        await editTask(newTask);
        this.setTasks();
    }

    handleDone = async(task: TaskModel) => {
        if (!task) {
            return;
        }

        const doneTask: TaskModel = {
            ...task,
            done: true
        }
        await editTask(doneTask);
        this.setTasks();
    }

    async componentWillMount() {
        this.setTasks();
    }

    handleDeleteTask = (taskId: string) => {
        deleteTask(taskId);
    }

    render() {
        return (
            <div className={'task-list-component'}>
                <TaskListComponent
                    handleSubmitCreationClick={this.handleSubmitCreation}
                    handleSubmitEditClick={this.handleSubmitEdition}
                    handleDoneClick={this.handleDone}
                    handleDeleteClick={this.handleDeleteTask}
                />
            </div>
        );
    }
}

function mapStateToProps(state: StateType) {
    return {
        taskList: state.taskList.taskList
    }
}

function mapDispatchToProps(dispatch: Dispatch<TaskListActions>): DispatchProps {
    return {
        setTasks: (value: TaskModel[]) => dispatch(setTasks(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);