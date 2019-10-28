import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { StateType } from './types';
import { taskListReducer, taskListInitialState } from './components/TaskListWidget/components/TaskListPage/TaskListLogic';
import register from './serviceWorker';
import TaskListContainer from './components/TaskListWidget/components/TaskListPage/TaskListContainer';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const reducer = combineReducers<StateType>({
    taskList: taskListReducer
});

export const initialState: StateType = {
    taskList: taskListInitialState
}

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <div style={{ top: '10%', left: '45%', position: 'absolute' }}>
            <TaskListContainer />
        </div>
    </Provider>
    , document.getElementById('root'));

register();
