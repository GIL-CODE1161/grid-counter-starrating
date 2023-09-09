import React from 'react'

class Grid extends React.Component {
  render() {
    const gridItems = [];
    const numRows = 4;
    const numColumns = 2;


    for(let i = 0; i < numRows; i++) {
      for (let j = 0; j <numColumns; j++) {
        const key = 'grid-item-${j}';

        const gridItem = <div key ={key} className='grid-item'>Row {i + 1}, Column {j + 1}</div>;
        gridItems.push(gridItem);
      }
    }

    return (
      <div className='grid-container'>
        {gridItems}
      </div>
    );


  }
}

export default Grid
