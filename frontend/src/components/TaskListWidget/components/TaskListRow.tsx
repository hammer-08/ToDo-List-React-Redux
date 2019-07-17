import * as React from 'react';
import './TaskListComponent.css';

interface OwnProps {
    key: number;
    desc: string;
    isDone: boolean;
    id: string;
    handlerSubmitEditClick(id: string, desc: string): void;
    handlerDoneClick(id: string): void;
}

interface State {
    desc: string;
    editTask: boolean;
}

type Props = OwnProps;

export default class TaskListRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            desc: this.props.desc,
            editTask: false
        }
    }

    handlerDescChange = (e: string) => {
        this.setState({ desc: e })
    }

    handlerSubmitEditClick = (id: string, text: string) => {
        this.setState({ editTask: false });
        this.props.handlerSubmitEditClick(id, text);
    }

    handlerCancelEditClick = () => {
        this.setState({ editTask: false });
    }

    render() {
        return (
            <div className={'row'}>
                {this.state.editTask
                    ? <div className={'edit-row'}>
                        <input
                            value={this.state.desc}
                            onChange={(e) => this.handlerDescChange(e.target.value)}
                        />
                        <button
                            onClick={() => this.handlerSubmitEditClick(this.props.id, this.state.desc)}
                        >
                            Submit
                    </button>
                        <button
                            onClick={this.handlerCancelEditClick}
                        >
                            Cancel
                    </button>
                    </div>
                    : <div>
                        <span>{this.props.desc}</span>
                        {this.props.isDone && <span> - OK </span>}
                        {!this.props.isDone &&
                            <span>
                                <button
                                    onClick={() => this.setState({ editTask: true, desc: this.props.desc })}>
                                    Edit
                    </button>
                                <button
                                    onClick={() => this.props.handlerDoneClick(this.props.id)}
                                >
                                    Done
                    </button>
                            </span>}
                    </div>}
            </div>
        );
    }
}