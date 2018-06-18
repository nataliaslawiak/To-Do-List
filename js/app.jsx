import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ToDoList/Header.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import InputTask from './components/ToDoList/InputTask.jsx';
import InProgress from './components/ToDoList/InProgress.jsx';
import FinishedTasks from './components/ToDoList/FinishedTasks.jsx';
import ListOverview from './components/ProductionList/ListOverview.jsx';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            contentEditable: false,
            items: [],
            lists: []
        }
    }

    onSubmit = ({taskName, name, startValue, endValue, weekValue}) => {
        event.preventDefault();
        const objectToSend = {
            description: taskName,
            name: name,
            status: "to-do"
        };

        const objectToSendTwo = {
            start: startValue,
            end: endValue,
            week: weekValue
        };

        fetch(`http://localhost:3000/task/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectToSend)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: [...this.state.items, data] //stare dane + nowe elementy
                });
            });

        fetch(`http://localhost:3000/list/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectToSendTwo)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    lists: [...this.state.lists, data] //stare dane + nowe elementy
                });
            })
    };

    componentDidMount (){
        fetch("http://localhost:3000/task")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    items: data
                });
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    loading:false,
                    items: []
                })
            });


        fetch("http://localhost:3000/list")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    lists: data
                });
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    loading:false,
                    lists: []
                })
            })
    }

    editTask = (id, updatedValues) => {

        fetch(`http://localhost:3000/task/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedValues)
        })
            .then(response => response.json())
            .then(data => {
                console.log(this);
                let editedItems = [...this.state.items];
                let index = editedItems.findIndex(el => el.id === data.id);
                editedItems[index] = data;
                this.setState({ items:editedItems });
            })
    };

    render(){
        return (
            <div className="app">
                <Header />
                <InputTask
                    onSubmit={this.onSubmit}
                />
                <div className="row">
                    <ToDoList
                    loading={this.state.loading}
                    items={this.state.items.filter(item=> item.status === "to-do")}
                    editTask={this.editTask}
                    />
                    <InProgress
                        editTask={this.editTask}
                        items={this.state.items.filter(item=> item.status === "in-progress")}
                    />
                    <FinishedTasks
                        items={this.state.items.filter(item=> item.status === "completed")}
                    />
                </div>
                <ListOverview
                    loading={this.state.loading}
                    lists={this.state.lists}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <Container />
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});