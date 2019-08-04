import * as React from 'react';
import TaskListRow from './TaskListRow';
import TaskListNewRow from './TaskListNewRow';
import { StateType } from '../../../types';
import { connect } from 'react-redux';
import { TaskModel } from '../../../ApiModels';
import './TaskListComponent.css';

interface OwnProps {
    handlerSubmitEditClick(id: string, desc: string): void;
    handlerDoneClick(id: string): void;
    handlerSubmitCreationClick(value: string): void;
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
        this.props.handlerSubmitCreationClick(value);
    }

    render() {
        return (
            <div className={'task-list'}>
                <button
                    className={'btn add-new-task'}
                    onClick={this.showNewRow}
                >
                    <span className={'glyphicon glyphicon-plus'}></span>
                    Add new task
                </button>
                <div className={'task-list list'}>
                    {this.state.showNewRow &&
                        <TaskListNewRow
                            handlerSubmitCreationClick={this.handleSubmitCreation}
                            handlerCancelCreationClick={this.handleCancelCreation}
                        />
                    }
                    <span className={'task-list list element'}>
                        {
                            this.props.taskList.map((e, index) => {
                                return (
                                    <TaskListRow
                                        key={index}
                                        desc={e.desc}
                                        done={e.done}
                                        id={e.id}
                                        handlerSubmitEditClick={this.props.handlerSubmitEditClick}
                                        handlerDoneClick={this.props.handlerDoneClick}
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