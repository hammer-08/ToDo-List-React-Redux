import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { StateType } from './types';
import { taskListReducer, taskListState } from './components/TaskListWidget/TaskListLogic';
import register from './serviceWorker';
import TaskListContainer from './components/TaskListWidget/TaskListContainer';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

const reducer = combineReducers<StateType>({
    taskList: taskListReducer
});

export const initialState: StateType = {
    taskList: taskListState
}

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <TaskListContainer />
    </Provider>
    , document.getElementById('root'));

register();
