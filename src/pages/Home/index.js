import React from 'react';

import {useBoard} from '../../hooks/board';

import * as S from './styles';

const Home = () => {
  const board = useBoard();
  return (
    <S.Container>
      <S.Title>Tamanho do board:</S.Title>
      <S.Subtitle>
        {board.maxColumnsNumber} x {board.maxRowsNumber}
      </S.Subtitle>
      <S.Title>BlockSize:</S.Title>
      <S.Subtitle>{board.blockSize}px</S.Subtitle>
      <S.Title>Difficulty::</S.Title>
      <S.Subtitle>{board.difficulty * 100}%</S.Subtitle>
    </S.Container>
  );
};

export default Home;
