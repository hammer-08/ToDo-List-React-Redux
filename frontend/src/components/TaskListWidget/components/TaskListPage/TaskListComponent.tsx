import * as React from 'react';
import TaskListRow from './TaskListRow';
import NewTaskModal from './NewTaskModal';
import {connect} from 'react-redux';
import {TaskModel} from '../../../../ApiModels';
import './TaskListPage.css';
import {changeEditingTask, newTask, openCreationModal, TaskListActions, TaskListState} from "./TaskListLogic";
import {Dispatch} from 'redux';

interface StateProps {
    taskList: TaskModel[];
    showCreateModal: boolean;
}

interface DispatchProps {
    onOpenCreationModal(): void;
}

type Props = StateProps & DispatchProps;

const TaskListComponent: React.FC<Props> = (props: Props) => {

    return (

        <div className={'task-list'}>
            {props.showCreateModal &&
            <NewTaskModal/>
            }
            <span className={'button newTaskButton glyphicon glyphicon-plus'}
                  onClick={props.onOpenCreationModal}> Add new task</span>
            <div className={'task-list list'}>
                <div className={'task-list list element'}>
                        {
                            props.taskList.map((task, index) => {
                                return (<TaskListRow key={index} task={task}/>)
                            })
                        }
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: TaskListState): StateProps {
    return {
        taskList: state.taskList,
        showCreateModal: state.showCreateModal
    }
}

function mapDispatchToProps(dispatch: Dispatch<TaskListActions>) {
    return {
        onOpenCreationModal: () => {
            dispatch(changeEditingTask(newTask));
            dispatch(openCreationModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);