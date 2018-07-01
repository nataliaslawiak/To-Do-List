import React from 'react';

class ListInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startValue: "",
            endValue: "",
            weekValue: "",
            warning: ""
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
// przeiterowac po liscie i sprawdzic  czy lista juz posiada taki week
    handleListSubmit = (event) => {

        event.preventDefault();
        const {lists} = this.props;
        let warning = "";
        if (!this.state.startValue || !this.state.endValue || !this.state.weekValue ){
            warning = "Uzupełnij wszystkie pola!";
            this.setState({warning});
        } else if (lists.map(item => item.week).includes(parseInt(this.state.weekValue))){
            warning = "Ten numer tygodnia już istnieje";
            this.setState({warning});
        } else if ( typeof this.props.listSubmit === 'function' ){
            this.props.listSubmit({
                startValue: this.state.startValue,
                endValue: this.state.endValue,
                weekValue: this.state.weekValue
            });
            this.setState({
                startValue: "",
                endValue: "",
                weekValue: "",
                warning
            });
        }
    };


    render(){
        const {warning} = this.state;
        return(
            <div>
                <div className="formList">
                    <form onSubmit={event => this.handleListSubmit(event)}>
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
                {warning && <h4 style={{marginTop:"20px"}}>{warning}</h4>}
            </div>
        )
    }
}

export default ListInput;