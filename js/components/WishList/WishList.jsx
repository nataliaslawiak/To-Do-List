import React from 'react';
import WishItem from './WishItem.jsx';

class WishList extends React.Component{

    render(){
        const {loading, wishlist} = this.props;
        return (
            <div className="wish-bg">
                <p className="to-do-header wish-header">Pobożna lista życzeń</p>
                <div className="wish-container">
                    {loading && <p>Loading...</p>}
                    {!loading && <ul>
                        {wishlist.map(item =>
                            <WishItem
                                key={item.id}
                                item={item}
                                deleteWish={this.props.deleteWish}
                            />
                        )}
                    </ul>
                    }
                </div>
            </div>
        )
    }
}

export default WishList;