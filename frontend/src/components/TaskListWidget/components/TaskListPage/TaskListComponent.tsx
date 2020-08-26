import * as React from 'react'
import TaskListRow from './TaskListRow'
import EditTaskModal from './EditTaskModal'
import { useSelector, useDispatch } from 'react-redux'
import { TaskModel } from '../../../../api/ApiModels'
import './TaskListPage.css'
import { TaskListState, setEditingTask, setTasks } from "./TaskListLogic"
import { findAllTasks } from '../../../../api/Rest'
import uuid from 'uuid'

const TaskListComponent: React.FunctionComponent<{}> = () => {
    const stableDispatch = React.useCallback(useDispatch(), [])
    const taskList = useSelector((state: TaskListState) => state.taskList)
    const [loading, setLoading] = React.useState(1)

    function showLoading() {
        return (
            <div>Loading...</div>
        )
    }

    function showTasks() {
        return (
            taskList.map((task, index) => {
                return <TaskListRow key={index} task={task} />
            })
        )
    }

    function showEmptyList() {
        return (
            <div>There is no tasks. Create a new one!</div>
        )
    }

    function showError() {
        return (
            <div>An error occured! Please, try again.</div>
        )
    }

    React.useEffect(() => {
        const asyncSetTasks = async () => {
            setLoading(1)
            try {
                const value: TaskModel[] = await findAllTasks()
                stableDispatch(setTasks(value))
                setLoading(0)
            } catch (e) {
                console.log(e)
                setLoading(-1)
            }
        }
        asyncSetTasks()

    }, [stableDispatch])

    const onOpenCreationModal = () => {
        const newTask: TaskModel = {
            id: uuid(),
            description: '',
            isDone: false,
            creationTimestamp: -1,
            lastEditionTimestamp: -1
        }

        stableDispatch(setEditingTask(newTask))
    }

    return (
        <div className="task-page">
            <div className="task-component">
                <EditTaskModal />

                <button className="button button-create"
                    onClick={onOpenCreationModal}>Create</button>

                <hr className="task-page hr-top" />

                <div className="task-list">
                    {loading === -1 && showError()}
                    {loading === 1 && showLoading()}
                    {loading === 0 && !taskList.length && showEmptyList()}
                    {loading === 0 && !!taskList.length && showTasks()}
                </div>
            </div >
        </div>
    )
}

export default TaskListComponent