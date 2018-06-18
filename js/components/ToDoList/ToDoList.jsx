import React from 'react';
import ToDoItem from './ToDoItem.jsx';

class ToDoList extends React.Component{

    render(){
        const {loading, items} = this.props;
        return (
            <div className="col-md-4">
                <div className="to-do-box">
                    <h4>Do zrobienia</h4>
                    <div>
                        {loading && <p>Loading...</p>}
                        {!loading && <ul>
                            {items.map(item =>
                                <ToDoItem
                                    item={item}
                                    editTask={this.props.editTask}
                                />
                            )}
                        </ul>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;