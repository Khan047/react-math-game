import React from 'react'
import Cell from './Cell'
const Row = ({ row,rowIndex,onDragStart,onDragOver,onDrop}) => {
    return (
      <tr id = {rowIndex} onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
>
        { row.map((cell, i) => <Cell key={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell}  onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop} />) }
          
      </tr>
      
    );
  };

export default Row;
