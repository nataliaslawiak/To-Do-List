import React from 'react';

class InProgressItem extends React.Component{
    handleEdit= (event, updatedValues) => {
        event.preventDefault();
        this.props.editTask(this.props.item.id, updatedValues);
    };

    render(){
        const {item} = this.props;

        /*let bgColor;
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
                <div style={{backgroundColor:"white"}} className="editable_li">
                    {item.description}
                </div>
                <div className="mdl-btn-center">
                    <button
                        className="submit_btn"
                        onClick={event => this.handleEdit(event, {status: "completed"})}
                    >Zrobione!</button>
                </div>
            </li>
        )
    }
}

export default InProgressItem;