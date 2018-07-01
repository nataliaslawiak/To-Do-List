import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/ToDoList/Header.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import InputTask from './components/ToDoList/InputTask.jsx';
import InProgress from './components/ToDoList/InProgress.jsx';
import FinishedTasks from './components/ToDoList/FinishedTasks.jsx';
import ListInput from './components/ProductionList/ListInput.jsx';
import ListOverview from './components/ProductionList/ListOverview.jsx';
import Quarter from './components/ProductionList/Quarter.jsx';
import WishList from './components/WishList/WishList.jsx';
import WishInput from './components/WishList/WishInput.jsx';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Tracking from './components/Tracking.jsx';

class TabNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1,
            justified:true
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return (
            <Tabs activeKey={this.state.key}
                  onSelect={this.handleSelect}
                  id="controlled-tab"
            >
                <Tab eventKey={1} title="Plan">
                    <ul className="nav nav-tabs">
                        <InputTask
                            onSubmit={this.props.onSubmit}
                        />
                        <div className="row">
                            <ToDoList
                                loading={this.props.loading}
                                items={this.props.items.filter(item=> item.status === "to-do")}
                                editTask={this.props.editTask}
                            />
                            <InProgress
                                editTask={this.props.editTask}
                                items={this.props.items.filter(item=> item.status === "in-progress")}
                            />
                            <FinishedTasks
                                items={this.props.items.filter(item=> item.status === "completed")}
                            />
                        </div>
                    </ul>
                </Tab>
                <Tab eventKey={2} title="Listy">
                    <ul className="nav nav-tabs">
                        <ListInput
                            listSubmit={this.props.listSubmit}
                            lists={this.props.lists}
                        />
                        <div className="tables-wrapper">
                            <ListOverview
                            loading={this.props.loading}
                            lists={this.props.lists}
                            editList={this.props.editList}
                            deleteList={this.props.deleteList}
                        />
                            <Quarter lists={this.props.lists}/>
                        </div>
                    </ul>
                </Tab>
                <Tab eventKey={3} title="Monitorowanie przesyłek">
                    <ul className="nav nav-tabs">
                        <Tracking />
                    </ul>
                </Tab>
                <Tab eventKey={4} title="Lista zyczen :)">
                    <ul className="nav nav-tabs">
                        <WishInput
                            wishlistSubmit={this.props.wishlistSubmit}
                        />
                        <WishList
                            loading={this.props.loading}
                            wishlist={this.props.wishlist}
                            deleteWish={this.props.deleteWish}
                        />
                    </ul>
                </Tab>
            </Tabs>
        );
    }
}

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            contentEditable: false,
            items: [],
            lists: [],
            wishlist: []
        }
    }

    onSubmit = ({taskName, name}) => {
        event.preventDefault();
        const objectToSend = {
            description: taskName,
            name: name,
            status: "to-do"
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
                    items: [data, ...this.state.items] //stare dane + nowe elementy
                });
            });
    };

    listSubmit = ({startValue, endValue, weekValue}) => {
        event.preventDefault();
        const objectToSendTwo = {
            start: parseInt(startValue),
            end: parseInt(endValue),
            week: parseInt(weekValue)
        };

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
                    lists: [...this.state.lists, data]
                });
            });
    };

    wishlistSubmit = ({title}) => {
        event.preventDefault();
        const objectToSendThree = {
            title: title
        };

        fetch(`http://localhost:3000/wish/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectToSendThree)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    wishlist: [...this.state.wishlist, data]
                });
            })
    };

    componentDidMount () {
        Promise.all([this.getTasks(), this.getLists(), this.getWishlists()])
            .then(([tasks, lists, wishitems]) => {
                this.setState({
                    loading: false,
                    items: tasks,
                    lists: lists,
                    wishlist: wishitems,
                });
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    loading: false,
                    items: [],
                    lists: [],
                    wishlist: [],
                })
            });
    }

    getTasks = () => {
        return fetch("http://localhost:3000/task")
            .then(res => res.json())
    };

    getLists = () => {
        return fetch("http://localhost:3000/list")
            .then(res => res.json())
    };

    getWishlists = () => {
        return fetch("http://localhost:3000/wish")
            .then(res => res.json())
    };

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
                let editedItems = [...this.state.items];
                let index = editedItems.findIndex(el => el.id === data.id);
                editedItems[index] = data;
                this.setState({ items:editedItems });
            })
    };

    editList = (id, updatedValues) => {

        fetch(`http://localhost:3000/list/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: parseInt(updatedValues.start),
                end: parseInt(updatedValues.end),
                week: parseInt(updatedValues.week)
            })
        })
            .then(response => response.json())
            .then(data => {
                let editedItems = [...this.state.lists];
                let index = editedItems.findIndex(el => el.id === data.id);
                editedItems[index] = data;
                this.setState({ lists: editedItems });
            })
    };

    deleteList = (id) => {
        return fetch(`http://localhost:3000/list/${id}`,
            {method: "DELETE"})
            .then(()=> {
                this.setState({
                    lists: this.state.lists.filter(item => item.id !== id),
                })

            })
    };

    deleteWish = (id) => {
         fetch(`http://localhost:3000/wish/${id}`,
            {method: "DELETE"})
            .then(()=> {
                this.setState({
                    wishlist: this.state.wishlist.filter(item => item.id !== id),
                })
            });
    };

    render(){
        return (
            <div className="app">
                <Header />
                <TabNav
                    loading={this.state.loading}
                    items={this.state.items}
                    lists={this.state.lists}
                    wishlist={this.state.wishlist}
                    editTask={this.editTask}
                    editList={this.editList}
                    onSubmit={this.onSubmit}
                    listSubmit={this.listSubmit}
                    wishlistSubmit={this.wishlistSubmit}
                    deleteWish={this.deleteWish}
                    deleteList={this.deleteList}
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