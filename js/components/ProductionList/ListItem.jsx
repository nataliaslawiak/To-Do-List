import React from 'react';

class ListItem extends React.Component {
    render() {
        const {item} = this.props;
        console.log(item.week);
        return (
            <tr>
                <td>{item.week}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td style={{textAlign:"center"}}>{((item.end - item.start) + 2) / 2}</td>
            </tr>
        );
    }
}

export default ListItem;
