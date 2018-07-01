import React from 'react';

class FinishedItem extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <li key={item.id} className="to-do-li" style={{backgroundColor:"#f2f2f2"}}>
                <p className="task-name">{item.name}</p>
                <div style={{backgroundColor:"#f2f2f2"}} className="editable_li">
                    {item.description}
                </div>
            </li>
        )
    }
}

export default FinishedItem;