import React from 'react';

class WishItem extends React.Component{

    handleDelete= (event) => {
        event.preventDefault();
        this.props.deleteWish(this.props.item.id);
    };

    render(){
        const {item} = this.props;
        const color = "hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' +
            (85 + 10 * Math.random()) + '%)';
        return(
            <li key={item.id} className="wish-li" style={{backgroundColor:color}}>
                {item.title}
                <div>
                    <button
                        className="delete_btn"
                        onClick={event => this.handleDelete(event)}
                    >
                        &times;
                    </button>
                </div>
            </li>
        )
    }
}

export default WishItem;