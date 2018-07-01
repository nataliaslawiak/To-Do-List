import React from 'react';


class WishInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title: ""
        }
    }

    handleTitle = (event)=> {
        this.setState({
            title: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if ( typeof this.props.wishlistSubmit === 'function' ){
            this.props.wishlistSubmit({
                title: this.state.title
            });
        }
        this.setState({
            title: ""
        })
    };

    render(){
        return(
            <div className="form">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        id="title"
                        value={this.state.title}
                        onChange={event => this.handleTitle(event)}
                        placeholder="Czego potrzeba Ci do szczęścia?"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="submit_btn">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default WishInput;