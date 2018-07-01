import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';

class ListItem extends React.Component {

    constructor(props){
        super(props);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            disabled: true,
            show: false,
        }
    }

    handleEdit = (event, updatedValues) => {
        event.preventDefault();
        this.props.editList(this.props.item.id, updatedValues);
    };

    handleDelete = (event) => {
        event.preventDefault();
        this.props.deleteList(this.props.item.id)
    };

    handleDismiss = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        const {item} = this.props;
        let btnLabel;
        if(this.state.disabled){
            btnLabel = <span>Edytuj</span>
        } else {
            btnLabel = <span onClick={event => this.handleEdit(event,
                {start: this.inputStart.value, end: this.inputEnd.value, week:this.inputWeek.value})}>Zatwierdź</span>
        }
        let weeklySum = ((item.end - item.start) + 2) / 2;

        return (
            <tr>
                <td>
                    {this.state.show &&
                    <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
                        <h4>Ostrzeżenie!</h4>
                        <p>
                            Czy na pewno chcesz usunąć tę listę?
                        </p>
                        <p>
                            <Button bsStyle="warning" onClick={event => this.handleDelete(event)}>Tak</Button>
                            <span> czy </span>
                            <Button onClick={this.handleDismiss}>Nie</Button>
                        </p>
                    </Alert>
                    }
                    <input
                        type="text"
                        defaultValue={item.week}
                        disabled={this.state.disabled}
                        ref={(input) => this.inputWeek = input}
                        className="editable_li"
                        style={{outline:this.state.disabled? "none" : "none",
                            border: this.state.disabled? "none" : "1px solid #f2f2f2"
                        }}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        defaultValue={item.start}
                        disabled={this.state.disabled}
                        ref={(input) => this.inputStart = input}
                        className="editable_li"
                        style={{outline:this.state.disabled? "none" : "none",
                            border: this.state.disabled? "none" : "1px solid #f2f2f2"
                        }}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        defaultValue={item.end}
                        disabled={this.state.disabled}
                        ref={(input) => this.inputEnd = input}
                        className="editable_li"
                        style={{outline:this.state.disabled? "none" : "none",
                            border: this.state.disabled? "none" : "1px solid #f2f2f2"
                        }}
                    />
                </td>
                <td style={{lineHeight:"43px"}}>{weeklySum}</td>
                <td>
                    <div style={{display:"inline-block", width:"170px", marginTop: "4px"}}>
                        <button className="submit_btn" onClick= {() => this.setState({disabled: !this.state.disabled})}>
                            {btnLabel}
                        </button>
                        <button className="submit_btn" onClick = {this.handleShow}>Usuń</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ListItem;