import React from 'react';

class InputTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskName: "",
            name: ""
        }
    }

    handleName = (event)=> {
        this.setState({
            name: event.target.value
        });
    };

    handleInputChange = (event) => {
        this.setState({
            taskName: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if ( typeof this.props.onSubmit === 'function' ){
            this.props.onSubmit({
                taskName: this.state.taskName,
                name:this.state.name
            });
        }
        this.setState({
            taskName: "",
            name: ""
        })
    };

    render(){
        return(
            <div className="form">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        id="newTask"
                        value={this.state.taskName}
                        onChange={event => this.handleInputChange(event)}
                        placeholder="Dodaj nowe zadanie"
                        type="text"
                        autoComplete="off"
                    />
                    <input
                        id="name"
                        value={this.state.name}
                        onChange={this.handleName}
                        placeholder="dla"
                    />
                    <button className="submit_btn">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default InputTask;