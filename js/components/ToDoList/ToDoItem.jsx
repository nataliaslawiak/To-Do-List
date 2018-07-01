import React from 'react';

class ToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: true
        }
    }

    handleEdit= (event, updatedValues) => {
        event.preventDefault();
        this.props.editTask(this.props.item.id, updatedValues);
    };


    render(){
        const {item} = this.props;
        let btnLabel;
        if(this.state.disabled === true){
            btnLabel = <span>Edytuj</span>
        } else {
            btnLabel = <span onClick={event => this.handleEdit(event, {description: this.input.value})}>Zatwierdź</span>
        }
/*
        let bgColor;
        if(item.name === "Nat"){
            bgColor = "#f2f7e0"
        } else if (item.name === "Mal"){
            bgColor = "#fdeed5"
        } else if (item.name === "Karo"){
            bgColor = "#f6e8e5"
        } else if (item.name === "Pacho"){
            bgColor = "#c5d1e2"
        } else {
            bgColor = "white"
        }*/

        return(
            <li key={item.id} className="to-do-li" style={{backgroundColor:"white"}}>
                <p className="task-name">{item.name}</p>
                <input
                    defaultValue={item.description}
                    disabled={this.state.disabled}
                    style={{outline:this.state.disabled? "none" : "none",
                        height:this.state.disabled? "inherit" : "50px",
                        lineHeight:this.state.disabled? "inherit" : "50px",
                        border: this.state.disabled? "none" : "1px solid #f2f2f2"
                    }}
                    className="editable_li"
                    ref={(input) => this.input = input}
                />
                <div className="btn-center">
                    <button
                        className="submit_btn"
                        onClick={event => this.handleEdit(event, {status: "in-progress"})}
                    >Dodaj do bierzących zadań</button>
                    <button
                        className="submit_btn"
                        onClick={() => this.setState({disabled: !this.state.disabled})}
                    >{btnLabel}
                    </button>
                </div>
            </li>
        )
    }
}

export default ToDoItem;