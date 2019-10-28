import * as React from 'react';
import './TaskListPage.css';
import {TaskModel} from '../../../../ApiModels';
import './TaskListComponent';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {
    cancelEdition,
    changeEditingTask,
    deleteTaskById,
    findAllTasks,
    setTasks, submitEdition,
    TaskListActions,
    TaskListState
} from "./TaskListLogic";
import * as _ from 'lodash';

interface OwnProps {
    task: TaskModel;
}

interface StateProps {
    editingTask?: TaskModel;
}

interface DispatchProps {
    setTasks(value: TaskModel[]): void;

    changeEditingTask(value: TaskModel): void;

    handleSubmitEditClick(): void;

    handleCancelEditClick(): void;
}

type Props = OwnProps & StateProps & DispatchProps;

const TaskListRow: React.FC<Props> = (props: Props) => {

    const handleDeleteClick = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this task?');

        if (confirmed) {
            await deleteTaskById(props.task.taskId);
            const tasks = await findAllTasks();
            props.setTasks(tasks);
        }
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const editingTask = _.cloneDeep(props.editingTask);

        if (!editingTask) {
            return;
        }

        editingTask.description = e.target.value;
        props.changeEditingTask(editingTask);
    };

    const handleDoneClick = () => {
        const task = _.cloneDeep(props.task);

        task.done = true;
        props.changeEditingTask(task);
    };

    const handleEditClick = () => {
        if (props.editingTask) {
            alert('Another task is editing now');
            return;
        }
        const task = _.cloneDeep(props.task);

        props.changeEditingTask(task);
    };

    const getShowRow = () => {
        return (
            <div className={'show-row'}>
                <span>{props.task.description}</span>
                {props.task.done &&
                <span className="okaySign glyphicon glyphicon-ok" style={{marginLeft: '10px'}}/>}
                {!props.task.done &&
                <span>
                                <span className="button glyphicon glyphicon-pencil" onClick={handleEditClick}/>
                                <span className="button glyphicon glyphicon-ok-sign" onClick={handleDoneClick}/>
                                <span className="button glyphicon glyphicon-trash" onClick={handleDeleteClick}/>
                            </span>}
                <hr className="hr"/>
            </div>
        );
    };

    const getEditRow = () => {
        if (!props.editingTask) {
            return;
        }

        return (
            <div className={'edit-row'}>
                <input
                    value={props.editingTask.description}
                    onChange={handleDescriptionChange}
                />
                <span className="button glyphicon glyphicon-floppy-save" onClick={props.handleSubmitEditClick}/>
                <span className="button glyphicon glyphicon-remove" onClick={props.handleCancelEditClick}>
                            Cancel
                        </span>
                <hr className="hr hr-edit"/>
            </div>
        );
    }

    return (
        <div className={'row'}>
            {props.editingTask && props.editingTask.taskId === props.task.taskId
                ? getEditRow()
                : getShowRow()}
        </div>
    );
};

function mapStateToProps(state: TaskListState): StateProps {
    return {
        editingTask: state.editingTask
    }
}

function mapDispatchToProps(dispatch: Dispatch<TaskListActions>): DispatchProps {
    return {
        setTasks: (tasks: TaskModel[]) => dispatch(setTasks(tasks)),
        changeEditingTask: (task: TaskModel) => dispatch(changeEditingTask(task)),
        handleCancelEditClick: () => dispatch(cancelEdition()),
        handleSubmitEditClick: () => dispatch(submitEdition())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListRow);