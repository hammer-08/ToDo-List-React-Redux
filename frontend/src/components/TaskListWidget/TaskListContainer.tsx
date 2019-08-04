import * as React from 'react';
import { connect } from 'react-redux';
import TaskListComponent from './components/TaskListComponent';
import { StateType } from '../../types';
import { Dispatch } from 'redux';
import { TaskModel } from '../../ApiModels';
import {
    TaskListActions,
    //submitCreation,
    submitEdition,
    makeDone,
    addTask,
    editTask,
    findAllTasks2
} from './TaskListLogic';
import uuid from 'uuid';

interface StateToProps {
    taskList: TaskModel[];
}

interface DispatchProps {
    //submitCreation(value: string): void;
    submitEdition(value: TaskModel[]): void;
    makeDone(value: TaskModel[]): void;
}

type Props = StateToProps & DispatchProps;

class TaskListContainer extends React.Component<Props> {
    handleSubmitCreation = (text: string) => {
        //this.props.submitCreation(text);
        const task: TaskModel = {
            id: uuid(),
            done: false,
            creationDateAndTime: '',
            creationTimestamp: '',
            desc: text
        }
        addTask(task);
    }

    handleSubmitEdition = (id: string, text: string) => {
        const oldTask = this.props.taskList.find(e => e.id === id);

        if (!oldTask) {
            return;
        }

        const newTask: TaskModel = {
            ...oldTask,
            desc: text
        }
        editTask(newTask);

        /*const taskListEdited = [...this.props.taskList];
        taskListEdited[index].desc = text;
        this.props.submitEdition(taskListEdited);*/
    }

    handleDone = (id: string) => {
        const oldTask = this.props.taskList.find(e => e.id === id);

        if (!oldTask) {
            return;
        }

        const newTask: TaskModel = {
            ...oldTask,
            done: true
        }
        editTask(newTask);

        /*const taskListEdited = [...this.props.taskList];
        taskListEdited[index].done = true
        this.props.makeDone(taskListEdited);*/
    }

    async butt() {
        let a = await findAllTasks2()
        alert(a);
    }

    render() {
        return (
            <div className={'task-list-component'}>
                <TaskListComponent
                    handlerSubmitCreationClick={this.handleSubmitCreation}
                    handlerSubmitEditClick={this.handleSubmitEdition}
                    handlerDoneClick={this.handleDone}
                />
                <button onClick={this.butt}>434</button>
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
        //submitCreation: (value: string) => dispatch(submitCreation(value)),
        submitEdition: (value: TaskModel[]) => dispatch(submitEdition(value)),
        makeDone: (value: TaskModel[]) => dispatch(makeDone(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);