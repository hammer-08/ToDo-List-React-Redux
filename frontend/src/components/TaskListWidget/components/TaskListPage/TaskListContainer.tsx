import * as React from 'react';
import { connect } from 'react-redux';
import TaskListComponent from './TaskListComponent';
import { Dispatch } from 'redux';
import { TaskModel } from '../../../../ApiModels';
import {
    TaskListActions,
    setTasks,
    findAllTasks,
    TaskListState
} from './TaskListLogic';

interface StateToProps {
    taskList: TaskModel[];
    editingTask?: TaskModel;
}

interface DispatchProps {
    setTasks(value: TaskModel[]): void;
}

type Props = StateToProps & DispatchProps;

class TaskListContainer extends React.Component<Props> {

    setTasks = async () => {
        const tasks = await findAllTasks();
        this.props.setTasks(tasks);
    };

    async componentDidMount() {
        this.setTasks();
    }

    render() {
        return (
            <div className={'task-list component'}>
                <TaskListComponent/>
            </div>
        );
    }
}

function mapStateToProps(state: TaskListState) {
    return {
        taskList: state.taskList,
        editingTask: state.editingTask
    }
}

function mapDispatchToProps(dispatch: Dispatch<TaskListActions>): DispatchProps {
    return {
        setTasks: (value: TaskModel[]) => dispatch(setTasks(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);