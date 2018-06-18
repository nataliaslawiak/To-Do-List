import React from 'react';
import ListItem from './ListItem.jsx';

class ListItems extends React.Component {
    render() {
        const {loading, lists} = this.props;
        return (
            <tbody>
                {loading && <tr><td>Loading...</td></tr>}
                {!loading && lists.map((item => (
                    <ListItem item={item} />
                )))
                }
            </tbody>
        )
    }
}

export default ListItems;
