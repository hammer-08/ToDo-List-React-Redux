import * as React from 'react';

interface State {
    desc: string;
}

interface OwnProps {
    handlerSubmitCreationClick(value: string): void;
    handlerCancelCreationClick(): void;
}

type Props = OwnProps;

export default class TaskListNewRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            desc: ''
        };
    }

    handlerDescChange = (e: string) => {
        this.setState({ desc: e })
    }

    render() {
        return (
            <div className={'edit-row'}>
                <input
                    value={this.state.desc}
                    onChange={(e) => this.handlerDescChange(e.target.value)}
                />
                <button
                    onClick={() => this.props.handlerSubmitCreationClick(this.state.desc)}
                >
                    Create
            </button>
                <button
                    onClick={this.props.handlerCancelCreationClick}
                >
                    Cancel
            </button>
            </div>
        );
    }
}
