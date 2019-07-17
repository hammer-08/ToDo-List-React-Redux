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
    addTask
} from './TaskListLogic';
import uuid from 'uuid';
import * as moment from 'moment';

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
    constructor(props: Props) {
        super(props);
    }

    handleSubmitCreation = (text: string) => {
        //this.props.submitCreation(text);
        const task: TaskModel = {
            id: uuid(),
            isDone: false,
            creationDateAndTime: '',
            creationTimestamp: '',
            desc: text
        }
        addTask(task);
    }

    handleSubmitEdit = (index: number, text: string) => {
        const taskListEdited = [...this.props.taskList];
        taskListEdited[index].desc = text;
        this.props.submitEdition(taskListEdited);
    }

    handleDone = (index: number) => {
        const taskListEdited = [...this.props.taskList];
        taskListEdited[index].isDone = true
        this.props.makeDone(taskListEdited);
    }

    render() {
        return (
            <div className={'task-list-component'}>
                <TaskListComponent
                    handlerSubmitCreationClick={this.handleSubmitCreation}
                    handlerSubmitEditClick={this.handleSubmitEdit}
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
        //submitCreation: (value: string) => dispatch(submitCreation(value)),
        submitEdition: (value: TaskModel[]) => dispatch(submitEdition(value)),
        makeDone: (value: TaskModel[]) => dispatch(makeDone(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);