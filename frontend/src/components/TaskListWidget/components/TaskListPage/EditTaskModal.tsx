import * as React from 'react'
import { TaskModel } from "../../../../api/ApiModels"
import { useSelector, useDispatch } from "react-redux"
import {
    clearEditingTask,
    TaskListState,
    setTasks,
    setEditingTask
} from "./TaskListLogic"
import { editTask, findAllTasks } from '../../../../api/Rest'
import _ from 'lodash'

const EditTaskModal: React.FunctionComponent<{}> = (props: {}) => {
    const dispatch = useDispatch()
    const editingTask = useSelector((state: TaskListState) => _.cloneDeep(state.taskOnEdition))

    if (!editingTask) {
        return <div />
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        editingTask.description = e.target.value
        dispatch(setEditingTask(editingTask))
    }

    const onSubmitEditionClick = async () => {
        editTask(editingTask)
        dispatch(clearEditingTask())

        const value: TaskModel[] = await findAllTasks()
        dispatch(setTasks(value))
    }

    const onCancelEditionClick = () => {
        dispatch(clearEditingTask())
    }

    return (
        <div className={'taskList-createTaskModal'}>
            <input
                value={editingTask.description}
                onChange={handleDescriptionChange}
            />
            <button onClick={onSubmitEditionClick}>
                Save
            </button>
            <button onClick={onCancelEditionClick}>
                Cancel
            </button>
        </div>
    )
}

export default EditTaskModal