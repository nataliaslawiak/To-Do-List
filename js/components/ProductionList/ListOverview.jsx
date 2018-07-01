import React from 'react';
import ListHeader from './ListHeader.jsx';
import ListItems from './ListItems.jsx';

class ListOverview extends React.Component {

    render() {
        return (
            <div className="table-container">
                <table className="table">
                    <ListHeader/>
                    <ListItems
                        loading={this.props.loading}
                        lists={this.props.lists}
                        editList={this.props.editList}
                        deleteList={this.props.deleteList}
                    />
                </table>
            </div>
        )
    }
}

export default ListOverview;