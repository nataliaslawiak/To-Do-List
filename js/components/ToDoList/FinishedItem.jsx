import React from 'react';

class FinishedItem extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <li key={item.id} className="to-do-li" style={{backgroundColor:"#d3d3d3"}}>
                <div style={{backgroundColor:"#d3d3d3"}} className="editable_li">
                    {item.description}
                </div>
                {item.name}
            </li>
        )
    }
}

export default FinishedItem;