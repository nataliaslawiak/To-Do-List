import React from 'react';
import FinishedItem from './FinishedItem.jsx';

class FinishedTasks extends React.Component{

    render(){
        return(
            <div className="col-md-4">
                <div className="to-do-box done-box ">
                    <p className="to-do-header">Zrobione!</p>
                    <ul>
                        {this.props.items.map(item =>
                            <FinishedItem
                                key={item.id}
                                item={item}
                            />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FinishedTasks;