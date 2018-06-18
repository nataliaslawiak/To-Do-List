import React from 'react';
import FinishedItem from './FinishedItem.jsx';

class FinishedTasks extends React.Component{

    render(){
        return(
            <div className="col-md-4">
                <div className="to-do-box done-box ">
                    <h4>Zrobione!</h4>
                    <ul>
                        {this.props.items.map(item =>
                            <FinishedItem
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