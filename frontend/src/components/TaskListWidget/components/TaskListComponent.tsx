import * as React from 'react';
import TaskListRow from './TaskListRow';
import TaskListNewRow from './TaskListNewRow';
import { StateType } from '../../../types';
import { connect } from 'react-redux';
import { TaskModel } from '../../../ApiModels';
import './TaskListComponent.css';

interface OwnProps {
    handleSubmitEditClick(task: TaskModel, desc: string): void;
    handleDoneClick(task: TaskModel): void;
    handleSubmitCreationClick(value: string): void;
    handleDeleteClick(taskId: string): void;
}

interface State {
    showNewRow: boolean;
}

interface StateToProps {
    taskList: TaskModel[];
}

type Props = OwnProps & StateToProps;

class TaskListComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showNewRow: false
        }
    }

    showNewRow = () => {
        this.setState({ showNewRow: true });
    }

    hideNewRow = () => {
        this.setState({ showNewRow: false });
    }

    handleCancelCreation = () => {
        this.hideNewRow();
    }

    handleSubmitCreation = (value: string) => {
        this.hideNewRow();
        this.props.handleSubmitCreationClick(value);
    }

    render() {
        return (
            <div className={'task-list'}>
                <span className={'button newTaskButton glyphicon glyphicon-plus'} onClick={this.showNewRow}> Add new task</span>
                <div className={'task-list list'}>
                    {this.state.showNewRow &&
                        <TaskListNewRow
                            handleSubmitCreationClick={this.handleSubmitCreation}
                            handleCancelCreationClick={this.handleCancelCreation}
                        />
                    }
                    <span className={'task-list list element'}>
                        {
                            this.props.taskList.map((task, index) => {
                                return (
                                    <TaskListRow
                                        key={index}
                                        task={task}
                                        handleSubmitEditClick={this.props.handleSubmitEditClick}
                                        handleDoneClick={this.props.handleDoneClick}
                                        handleDeleteClick={this.props.handleDeleteClick}
                                    />
                                );
                            })
                        }
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StateType) {
    return {
        taskList: state.taskList.taskList
    }
}

export default connect(mapStateToProps)(TaskListComponent);