import * as React from 'react'
import './TaskListPage.css'
import { TaskModel } from '../../../../api/ApiModels'
import './TaskListComponent'
import { useSelector, useDispatch } from "react-redux"
import {
    TaskListState,
    setEditingTask,
    setTasks
} from "./TaskListLogic"
import * as _ from 'lodash'
import { deleteTaskById, editTask, findAllTasks } from '../../../../api/Rest'

interface Props {
    task: TaskModel
}

const TaskListRow: React.FunctionComponent<Props> = (props: Props) => {
    const dispatch = useDispatch()
    const editingTask = useSelector((state: TaskListState) => state.taskOnEdition)

    const handleEditClick = () => {
        if (editingTask) {
            alert('Another task is editing now')
            return
        }

        dispatch(setEditingTask(_.cloneDeep(props.task)))
    }

    const handleDoneClick = async () => {
        const task = _.cloneDeep(props.task)

        task.isDone = true
        editTask(task)

        const value: TaskModel[] = await findAllTasks()
        dispatch(setTasks(value))
    }

    const handleDeleteClick = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this task?')

        if (confirmed) {
            deleteTaskById(props.task.id)

            const value: TaskModel[] = await findAllTasks()
            dispatch(setTasks(value))
        }
    }

    return (
        <div className="task-row">
            <div className="task-row-common">
                <span className={'icon glyphicon glyphicon-ok '
                    + (props.task.isDone ? ' okayDone' : ' okayUndone')} onClick={handleDoneClick} />
                <span className="task-description">{props.task.description}</span>
                <div className="buttons">
                    <span className="icon glyphicon glyphicon-pencil" onClick={handleEditClick} />
                    <span className="icon glyphicon glyphicon-trash" onClick={handleDeleteClick} />
                </div>
            </div>
            <hr className="hr" />
        </div>
    )
}

export default TaskListRow