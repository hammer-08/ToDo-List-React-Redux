import * as React from 'react';
import './TaskListComponent.css';
import { TaskModel } from '../../../ApiModels';
import './TaskListComponent';

interface OwnProps {
    key: number;
    task: TaskModel;
    handleSubmitEditClick(task: TaskModel, desc: string): void;
    handleDoneClick(task: TaskModel): void;
    handleDeleteClick(taskId: string): void;
}

interface State {
    desc: string;
    editTask: boolean;
}

type Props = OwnProps;

export default class TaskListRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            desc: this.props.task.value,
            editTask: false
        }
    }

    handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ desc: e.target.value })
    }

    handleSubmitEditClick = () => {
        this.setState({ editTask: false });
        this.props.handleSubmitEditClick(this.props.task, this.state.desc);
    }

    handleCancelEditClick = () => {
        this.setState({ editTask: false });
    }

    handleDoneClick = () => {
        this.props.handleDoneClick(this.props.task);
    }

    handleEditClick = () => {
        this.setState({ editTask: true })
    }

    handleDeleteClick = () => {
        const confirmed = window.confirm('Are you sure you want to delete this task?');

        if (confirmed) {
            this.props.handleDeleteClick(this.props.task.taskId);
        }
    }

    render() {
        return (
            <div className={'row'}>
                {this.state.editTask
                    ? <div className={'edit-row'}>
                        <input
                            value={this.state.desc}
                            onChange={this.handleDescChange}
                        />
                        <span className="button glyphicon glyphicon-floppy-save" onClick={this.handleSubmitEditClick} />
                        <span className="button glyphicon glyphicon-remove" onClick={this.handleCancelEditClick}>
                            Cancel
                        </span>
                    </div>
                    : <div className={'show-row'}>
                        <span>{this.props.task.value}</span>
                        {this.props.task.done && <span className="okaySign glyphicon glyphicon-ok" style={{marginLeft: '10px'}}/>}
                        {!this.props.task.done &&
                            <span>
                                <span className="button glyphicon glyphicon-pencil" onClick={this.handleEditClick} />
                                <span className="button glyphicon glyphicon-ok-sign" onClick={this.handleDoneClick} />
                                <span className="button glyphicon glyphicon-trash" onClick={this.handleDeleteClick} />
                            </span>}
                    </div>}
            </div>
        );
    }
}