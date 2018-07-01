import React from 'react';
import ToDoItem from './ToDoItem.jsx';

class ToDoList extends React.Component{

    render(){
        const {loading, items} = this.props;
        return (
            <div className="col-md-4">
                <div className="to-do-box">
                    <p className="to-do-header">Do zrobienia</p>
                    <div>
                        {loading && <p>Loading...</p>}
                        {!loading && <ul>
                            {items.sort((a, b)=> b.id - a.id).map(item =>
                                <ToDoItem
                                    key={item.id}
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