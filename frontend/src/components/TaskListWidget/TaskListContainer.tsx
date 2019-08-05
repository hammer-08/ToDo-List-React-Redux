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
    findAllTasks
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

    async setTasks () {
        const tasks = await findAllTasks();
        this.props.setTasks(tasks);
    }

    handleSubmitCreation = (text: string) => {
        const task: TaskModel = {
            id: uuid(),
            done: false,
            creationDateAndTime: moment().toString(),
            creationTimestamp: moment().utc.toString(),
            value: text
        }
        editTask(task);

        setInterval(() => this.setTasks(), 1000);
    }

    handleSubmitEdition = (id: string, text: string) => {
        const oldTask = this.props.taskList.find(e => e.id === id);

        if (!oldTask) {
            return;
        }

        const newTask: TaskModel = {
            ...oldTask,
            value: text
        }
        editTask(newTask);

        setInterval(() => this.setTasks(), 1000);
    }

    handleDone = (id: string) => {
        const oldTask = this.props.taskList.find(e => e.id === id);

        if (!oldTask) {
            return;
        }

        const doneTask: TaskModel = {
            ...oldTask,
            done: true
        }
        editTask(doneTask);

        setInterval(() => this.setTasks(), 1000);
    }

    async componentWillMount() {
        this.setTasks();
    }

    render() {
        return (
            <div className={'task-list-component'}>
                <TaskListComponent
                    handlerSubmitCreationClick={this.handleSubmitCreation}
                    handlerSubmitEditClick={this.handleSubmitEdition}
                    handlerDoneClick={this.handleDone}
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