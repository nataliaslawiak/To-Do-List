import React from 'react';
import InProgressItem from './InProgressItem.jsx';

class InProgress extends React.Component{

    render(){
        return(
            <div className="col-md-4">
                <div className="to-do-box progress-box ">
                    <p className="to-do-header">Bierzące zadania</p>
                    <ul>
                        {this.props.items.map(item =>
                            <InProgressItem
                                key={item.id}
                                item={item}
                                editTask={this.props.editTask}
                            />
                        )}
                    </ul>
                </div>

            </div>
        )
    }

}

export default InProgress;