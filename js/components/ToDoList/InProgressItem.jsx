import React from 'react';

class InProgressItem extends React.Component{
    handleEdit= (event, updatedValues) => {
        event.preventDefault();
        this.props.editTask(this.props.item.id, updatedValues);
    };

    render(){
        let bgColor;
        const {item} = this.props;
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

        return(
            <li key={item.id} className="to-do-li" style={{backgroundColor:bgColor}}>
                <div style={{backgroundColor:bgColor}} className="editable_li">
                    {item.description}
                </div>
                 {item.name}
                <div>
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