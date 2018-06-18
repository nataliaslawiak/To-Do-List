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

        let bgColor;
        if(item.name === "nat"){
            bgColor = "#f0ffed"
        } else if (item.name === "mal"){
            bgColor = "#fffded"
        } else if (item.name === "karo"){
            bgColor = "#ffe2e0"
        } else if (item.name === "pacho"){
            bgColor = "#f2edff"
        } else {
            bgColor = "white"
        }
        console.log(item.description);
        return(
            <li key={item.id} className="to-do-li" style={{backgroundColor:bgColor}}>
                <input
                    defaultValue={item.description}
                    disabled={this.state.disabled}
                    style={{outline:this.state.disabled? "none" : "none",
                        height:this.state.disabled? "inherit" : "50px",
                        lineHeight:this.state.disabled? "inherit" : "50px",
                        backgroundColor: this.state.disabled? bgColor : "white"
                    }}
                    className="editable_li"
                    ref={(input) => this.input = input}
                />
                {item.name}
                <div>
                    <button
                        className="submit_btn"
                        onClick={event => this.handleEdit(event, {status: "in-progress"})}
                    >Dodaj do bierzących zadań</button>
                    <button className="submit_btn" onClick={() =>
                        this.setState({disabled: !this.state.disabled})}
                    >{btnLabel}
                    </button>
                </div>
            </li>
        )
    }
}

export default ToDoItem;