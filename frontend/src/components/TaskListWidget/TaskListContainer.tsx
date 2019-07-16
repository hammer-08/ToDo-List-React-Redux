import * as React from 'react';
import { connect } from 'react-redux';
import TaskListComponent from './components/TaskListComponent';
import { StateType } from '../../types';
import { Dispatch } from 'redux';
import { Task } from '../../ApiModels';
import {
    TaskListActions,
    submitCreation,
    submitEdition,
    makeDone
} from './TaskListLogic';

interface State {
}

interface StateToProps {
    taskList: Task[];
}

interface DispatchProps {
    submitCreation(value: Task): void;
    submitEdition(value: Task[]): void;
    makeDone(value: Task[]): void;
}

type Props = StateToProps & DispatchProps;

class TaskListContainer extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleSubmitCreation = (text: string) => {
        this.props.submitCreation({ desc: text, isDone: false });
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
        submitCreation: (value: Task) => dispatch(submitCreation(value)),
        submitEdition: (value: Task[]) => dispatch(submitEdition(value)),
        makeDone: (value: Task[]) => dispatch(makeDone(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);