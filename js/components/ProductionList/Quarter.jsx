import React from 'react';

class Quarter extends React.Component {
    render() {
        const lists = this.props.lists;
        const yearlySum = lists.map((item) =>{
            return (((item.end - item.start) + 2) / 2)
        });
        const qrOne = yearlySum.slice([0],[13]);
        const qrTwo = yearlySum.slice([13],[26]);
        const qrThree = yearlySum.slice([26],[39]);
        const qrFour = yearlySum.slice([39],[52]);

        let avgOne;
        let avgTwo;
        let avgThree;
        let avgFour;
        if (qrOne.length <= 0) {
            avgOne = 0;
        } else {
            avgOne = ((qrOne.reduce((a, b) => a + b, 0))/qrOne.length).toFixed(2)
        }

        if (qrTwo.length <= 0) {
            avgTwo = 0;
        } else {
            avgTwo = ((qrTwo.reduce((a, b) => a + b, 0))/qrTwo.length).toFixed(2)
        }

        if (qrThree.length <= 0) {
            avgThree = 0;
        } else {
            avgThree = ((qrThree.reduce((a, b) => a + b, 0))/qrThree.length).toFixed(2)
        }

        if (qrFour.length <= 0) {
            avgFour = 0;
        } else {
            avgFour = ((qrFour.reduce((a, b) => a + b, 0))/qrFour.length).toFixed(2)
        }

        return (
            <div className="table-container2">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Kwartał 1</th>
                        <th scope="col">Kwartał 2</th>
                        <th scope="col">Kwartał 3</th>
                        <th scope="col">Kwartał 4</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Średnia</th>
                        <td style={{textAlign:"center"}}>{avgOne}</td>
                        <td style={{textAlign:"center"}}>{avgTwo}</td>
                        <td style={{textAlign:"center"}}>{avgThree}</td>
                        <td style={{textAlign:"center"}}>{avgFour}</td>
                    </tr>
                    <tr>
                        <th scope="row">Suma list</th>
                        <td style={{textAlign:"center"}}>{qrOne.reduce((a, b) => a + b, 0)}</td>
                        <td style={{textAlign:"center"}}>{qrTwo.reduce((a, b) => a + b, 0)}</td>
                        <td style={{textAlign:"center"}}>{qrThree.reduce((a, b) => a + b, 0)}</td>
                        <td style={{textAlign:"center"}}>{qrFour.reduce((a, b) => a + b, 0)}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Quarter;
