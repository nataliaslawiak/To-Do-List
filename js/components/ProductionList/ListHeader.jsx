import React from 'react';

class ListHeader extends React.Component {
    render() {
        return (
            <thead className="thead-dark">
            <tr>
                <th scope="col">Tydzień</th>
                <th scope="col">Początek</th>
                <th scope="col">Koniec</th>
                <th scope="col">&sum;</th>
            </tr>
            </thead>
        )
    }
}

export default ListHeader;
