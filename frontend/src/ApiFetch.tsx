import * as _ from 'lodash';

export function apiFetch(input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
    const defaultHeaders: _.Dictionary<string> = {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
    };

    if (!init) {
        init = {};
    }

    if (!init.headers) {
        init.headers = new Headers();
    }

    init.headers = _.assign(defaultHeaders, init.headers);

    return fetch(input, init)
        .then(response => {
            if (response.ok) {
                return response;
            } else if (response.status === 400) {
                return response.json().then((json) => Promise.reject<Response>(json));
            } else if (response.status === 404) {
                return Promise.reject<Response>({
                    message: 'Object not found',
                    exceptionName: '',
                    statusCode: 404
                });
            } else if (response.status === 403) {
                return Promise.reject<Response>({
                    message: 'Access is denied',
                    exceptionName: '',
                    statusCode: 403
                });
            } else if (response.status === 401) {
                return Promise.reject<Response>({
                    message: 'User is not authenticated',
                    exceptionName: '',
                    statusCode: 401
                });
            }

            return Promise.reject<Response>({
                message: 'Unknown network error',
                exceptionName: '',
                statusCode: response.status
            });
        })
        /*.catch((error: ErrorDto) => {
            if (error.statusCode === 401) {
                window.location.replace('#/logout');
            } else if (error.statusCode === 403) {
                window.location.replace('#/');
            } else {
                const store: Store<StateType> = anyWindow.applicationStore;

                if (store) {
                    store.dispatch(createErrorNotification(error.message));
                }
            }

            return Promise.reject<Response>(error);
        })*/;
}