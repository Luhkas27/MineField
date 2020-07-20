import React from 'react';

import Field from '../../components/Field';

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
      <S.Title>Difficulty:</S.Title>
      <S.Subtitle>{board.difficulty * 100}%</S.Subtitle>
      <Field />
      <Field opened />
      <Field opened nearMinesQuantity={1} />
      <Field opened nearMinesQuantity={2} />
      <Field opened nearMinesQuantity={3} />
      <Field opened nearMinesQuantity={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </S.Container>
  );
};

export default Home;
