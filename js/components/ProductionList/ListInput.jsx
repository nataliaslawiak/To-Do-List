import React from 'react';

class ListInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startValue: "",
            endValue: "",
            weekValue: ""
        }
    }

    handleStart = (event)=> {
        this.setState({
            startValue: event.target.value
        });
    };

    handleEnd = (event) => {
        this.setState({
            endValue: event.target.value
        })
    };

    handleWeek = (event) => {
        this.setState({
            weekValue: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if ( typeof this.props.onSubmit === 'function' ){
            this.props.onSubmit({
                startValue: this.state.startValue,
                endValue: this.state.endValue,
                weekValue: this.state.weekValue
            });
        }
    };

    render(){
        return(
            <div className="formList">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        id="start"
                        value={this.state.startValue}
                        onChange={event => this.handleStart(event)}
                        placeholder="Początek"
                        type="text"
                        autoComplete="off"
                    />
                    <input
                        id="end"
                        value={this.state.endValue}
                        onChange={event => this.handleEnd(event)}
                        placeholder="Koniec"
                        type="text"
                        autoComplete="off"
                    />
                    <input
                        id="week"
                        value={this.state.weekValue}
                        onChange={event => this.handleWeek(event)}
                        placeholder="Numer tygodnia"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="submit_btn">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default ListInput;