import React from 'react';

class Tracking extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hermesVal: "",
            dhlVal: ""
        }
    }

    handleHerm = (event) => {
        this.setState({
            hermesVal: event.target.value
        })
    };

    handleDHL = (event) => {
        this.setState({
            dhlVal: event.target.value
        })
    };

    render(){
        const urlHermes= "https://www.myhermes.de/empfangen/sendungsverfolgung/sendungsinformation/#";
        const urlDHL= "https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html?piececode=";
        return(
        <div className="tracking-container">
            <div className="tracking-box">
                <div>
                    <div className="img-hermes"> </div>
                    <input
                        id="hermes"
                        value={this.state.hermesVal}
                        onChange={event => this.handleHerm(event)}
                        placeholder="Podaj numer przesyłki"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="tracking-btn submit_btn">
                        <a href={urlHermes + this.state.hermesVal} target="_blank">Szukaj</a>
                    </button>
                </div>
                <div>
                    <div className="img-dhl"> </div>
                    <input
                        id="dhl"
                        value={this.state.dhlVal}
                        onChange={event => this.handleDHL(event)}
                        placeholder="Podaj numer przesyłki"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="tracking-btn submit_btn">
                        <a href={urlDHL + this.state.dhlVal} target="_blank">Szukaj</a>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}


export default Tracking;