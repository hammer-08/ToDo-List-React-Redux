import * as React from 'react'
import { TaskModel } from "../../../../api/ApiModels"
import { useSelector, useDispatch } from "react-redux"
import {
    clearEditingTask,
    TaskListState,
    setTasks,
    setEditingTask
} from "./TaskListLogic"
import { editTask } from '../../../../api/Rest'
import _ from 'lodash'
import './TaskListPage.css'
import { Modal } from 'react-bootstrap'

const EditTaskModal: React.FunctionComponent<{}> = () => {
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
        if (!editingTask.description.trim()) {
            alert("Description cannot be empty!")
            return
        }

        const value: TaskModel[] = await editTask(editingTask)
        dispatch(clearEditingTask())
        dispatch(setTasks(value))
    }

    const onCancelEditionClick = () => {
        dispatch(clearEditingTask())
    }

    return (
        <Modal className="edit-task-modal" bsSize="lg" show={!!editingTask} onHide={onCancelEditionClick}>
            <Modal.Header className="modal-header" closeButton={true}>Edit task</Modal.Header>
            <Modal.Body className="modal-body">
                <span className="modal-body-desc-label">Description:</span>
                <div className="modal-body-desc-input">
                    <input
                        value={editingTask.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <button className="button save" onClick={onSubmitEditionClick}>Save</button>
                <button className="button cancel" onClick={onCancelEditionClick}>Cancel</button>
            </Modal.Footer>
        </Modal >
    )
}

export default EditTaskModal