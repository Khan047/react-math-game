import React from 'react'

const Cell = ({ rowIndex, columnIndex, cellValue, onDragOver,onDragStart,onDrop ,bg ,}) => {
  
   
    
    return (
      <td id={columnIndex}>
        <div  id={columnIndex} className="cell"   bg={bg} draggable ="true" onDragStart={onDragStart({ row:rowIndex,col:columnIndex })}
          onDragOver={onDragOver({ row: rowIndex,col:columnIndex })}
          onDrop={onDrop({ row: rowIndex,col:columnIndex })}>
          {cellValue}
          
        </div>
      </td>
      
    );
  }

export default Cell;
