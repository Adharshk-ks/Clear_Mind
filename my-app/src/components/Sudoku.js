import React, { useState } from 'react';
import './Sudoku.css'; // Ensure you create this file for styling

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const Sudoku = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleChange = (row, col, value) => {
    const newBoard = board.map((r, i) => 
      i === row ? r.map((cell, j) => (j === col ? value : cell)) : r
    );
    setBoard(newBoard);
  };

  const renderCell = (value, row, col) => (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => handleChange(row, col, parseInt(e.target.value) || 0)}
    />
  );

  return (
    <div className="Sudoku">
      <h2>Click IT Game</h2>
      <div className="grid">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div className="cell" key={`${rowIndex}-${colIndex}`}>
              {renderCell(cell, rowIndex, colIndex)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sudoku;
