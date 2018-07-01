import React from 'react';
import ListItem from './ListItem.jsx';

class ListItems extends React.Component {
    render() {
        const {loading, lists} = this.props;
        return (
            <tbody>
                {loading && <tr><td>Loading...</td></tr>}
                {!loading && lists.sort((a, b)=> a.week - b.week).map((item => (
                    <ListItem
                        item={item}
                        key={item.id}
                        editList={this.props.editList}
                        deleteList={this.props.deleteList}
                    />
                )))
                }
            </tbody>
        )
    }
}

export default ListItems;
