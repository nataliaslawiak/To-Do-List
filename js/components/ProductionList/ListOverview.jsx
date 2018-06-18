import React from 'react';
import ListInput from './ListInput.jsx';
import ListHeader from './ListHeader.jsx';
import ListItems from './ListItems.jsx';

class ListOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    clickHandler = () => {
        this.setState({
            visible: !this.state.visible
        })
    };

    render() {
        if (this.state.visible === false) {
            return (
                <div className="list"
                     onClick={this.clickHandler}>Listy</div>
            )
        } else {
            return (
                <div>
                    <ListInput onSubmit={this.props.onSubmit}/>
                    <table className="table" style={{width: "350px"}}>
                        <ListHeader/>
                        <ListItems
                            loading={this.props.loading}
                            lists={this.props.lists}
                        />
                    </table>
                    <button onClick={this.clickHandler}>Ukryj</button>
                </div>
            )
        }
    }
}

export default ListOverview;