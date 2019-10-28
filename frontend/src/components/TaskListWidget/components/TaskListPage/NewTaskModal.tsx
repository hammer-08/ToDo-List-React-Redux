import * as React from 'react';
import {TaskModel} from "../../../../ApiModels";
import {connect} from "react-redux";
import {
    cancelCreation,
    changeEditingTask,
    closeCreationModal,
    submitCreation,
    TaskListActions,
    TaskListState
} from "./TaskListLogic";
import {Dispatch} from "redux";
import * as _ from 'lodash';

interface StateProps {
    editingTask?: TaskModel;
}

interface DispatchProps {
    changeEditingTask(value: TaskModel): void;

    handleSubmitCreationClick(): void;

    handleCancelCreationClick(): void;
}

type Props = StateProps & DispatchProps;

const NewTaskModal: React.FC<Props> = (props: Props) => {
    const editingTask = _.cloneDeep(props.editingTask);

    if (!editingTask) {
        return <div/>;
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        editingTask.description = e.target.value;

        props.changeEditingTask(editingTask)
    };

    return (
        <div className={'taskList-createTaskModal'}>
            <input
                value={editingTask.description}
                onChange={handleDescriptionChange}
            />
            <button onClick={props.handleSubmitCreationClick}>
                Create
            </button>
            <button onClick={props.handleCancelCreationClick}>
                Cancel
            </button>
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
        changeEditingTask: (editingTask: TaskModel) => dispatch(changeEditingTask(editingTask)),
        handleCancelCreationClick: () => {
            dispatch(cancelCreation());
            dispatch(closeCreationModal());
        },
        handleSubmitCreationClick: () => {
            dispatch(submitCreation());
            dispatch((closeCreationModal()));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskModal);