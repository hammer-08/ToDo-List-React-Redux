import * as React from 'react';

interface State {
    desc: string;
}

interface OwnProps {
    handleSubmitCreationClick(value: string): void;
    handleCancelCreationClick(): void;
}

type Props = OwnProps;

export default class TaskListNewRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            desc: ''
        };
    }

    handlerDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ desc: e.target.value })
    }

    handleSubmitCreationClick = () => {
        this.props.handleSubmitCreationClick(this.state.desc);
    }

    render() {
        return (
            <div className={'edit-row'}>
                <input
                    value={this.state.desc}
                    onChange={this.handlerDescChange}
                />
                <button
                    onClick={this.handleSubmitCreationClick}
                >
                    Create
            </button>
                <button
                    onClick={this.props.handleCancelCreationClick}
                >
                    Cancel
            </button>
            </div>
        );
    }
}
