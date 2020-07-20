import React, {createContext, useContext, useState} from 'react';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

const BoardContext = createContext({});

function BoardProvider({children}) {
  const [maxColumnsNumber, setMaxColumnsNumber] = useState(10);
  const [blockSize, setBlockSize] = useState(() => {
    const blockSizeWithoutMargin = width / maxColumnsNumber;
    const blockSizeWithMargin = blockSizeWithoutMargin - 4;

    return blockSizeWithMargin;
  });
  const [maxRowsNumber, setMaxRowsNumber] = useState(() => {
    const resizedHeight = height * 0.6;
    const numberOfRowsWithoutRound = resizedHeight / blockSize;
    const numberOfRowsRounded = Math.floor(numberOfRowsWithoutRound);

    return numberOfRowsRounded;
  });

  const [difficulty, setDifficulty] = useState(0.1);

  const [cleanBoard, setCleanBoard] = useState(() => {
    const board = Array(maxRowsNumber)
      .fill(0)
      .map((rowItem, rowIndex) => {
        return Array(maxColumnsNumber)
          .fill(0)
          .map((columnItem, columnIndex) => ({
            row: rowIndex,
            colum: columnIndex,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          }));
      });

    return board;
  });

  const [minedBoard, setMinedBoard] = useState(() => {
    const board = cleanBoard;
    const minesAmount = maxRowsNumber * maxColumnsNumber * difficulty;

    let minesSpread = 0;

    while (minesSpread < minesAmount) {
      const selectedRow = Math.floor(Math.random() * maxRowsNumber);
      const selectedColumn = Math.floor(Math.random() * maxColumnsNumber);

      if (!board[selectedRow][selectedColumn].mined) {
        board[selectedRow][selectedColumn].mined = true;
        minesSpread += 1;
      }
    }

    console.log(board);

    return board;
  });

  return (
    <BoardContext.Provider
      value={{blockSize, maxColumnsNumber, maxRowsNumber, difficulty}}>
      {children}
    </BoardContext.Provider>
  );
}

function useBoard() {
  const context = useContext(BoardContext);

  return context;
}

BoardProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {BoardProvider, useBoard};
