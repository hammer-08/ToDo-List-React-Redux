import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { taskListReducer } from './components/TaskListWidget/components/TaskListPage/TaskListLogic'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import TaskListComponent from './components/TaskListWidget/components/TaskListPage/TaskListComponent'

const store = createStore(taskListReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <TaskListComponent />
    </Provider>
    , document.getElementById('root'))