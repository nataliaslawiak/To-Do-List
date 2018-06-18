import React from 'react';
import ReactDOM from 'react-dom';

class Logo extends React.Component{
    render(){
        return (
            <div className="logo">Familiare</div>
        )
    }
}




class ToDoItem extends React.Component{
    handleClick = () => {
        if ( typeof this.props.chosenTask === 'function' ){
            this.props.chosenTask(this.props.title);
        }
    };

    render(){
        return (
            <li key={this.props.id} className="to-do-li">
                {this.props.title} {this.props.description}
                <button onClick={this.handleClick}>Dodaj do bierzacych zadan</button>
            </li>
        );
    }
}


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true,
            items: []
        };
    }

    componentDidMount (){
        fetch("http://localhost:3000/task")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false,
                    items:data,
                });
            })
            .catch(() => {
                this.setState({
                    loading:false,
                    items:"Blad",
                })
            })
    }

    chosenTask (title) {
        let currentChosen = this.state.items;
        currentChosen.push(title);

        this.setState({
            items: currentChosen
        })
    };

    render(){
        const {loading, items} = this.state;
        const list = items.map(item => {
            return(
                <ToDoItem
                    key={item.id}
                    title={item}
                    chosenTask={this.chosenTask}
                />
            )}

        );

        return (
            <div className="col-6 col-md-4 to-do-box">
                <h4>Do zrobienia</h4>
                {loading && <p>Loading...</p>}
                {!loading && <ul>{list}</ul>}
            </div>
        )
    }
}

class Body extends React.Component{
    render(){
        return (
            <div className="body_style">
                <Logo />
                <ToDoList />
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <Body />
        )
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});



return(
    <li key={item.id} className="to-do-li" style={{backgroundColor:bgColor}}>
        <div
            contentEditable={this.state.contentEditable}
            style={{outline:this.state.contentEditable? "none" : "none",
                height:this.state.contentEditable? "50px" : "inherit",
                lineHeight:this.state.contentEditable? "50px" : "inherit",
                backgroundColor: this.state.contentEditable? "white" : bgColor
            }}
            className="editable_li"
        >
            {item.description}
        </div>


        {item.name}
        <div>
            <button className="submit_btn">Dodaj do bierzących zadań</button>
            <button className="submit_btn" onClick={() =>
                this.setState({contentEditable: !this.state.contentEditable})}
            >{btnLabel}
            </button>
        </div>
    </li>
)