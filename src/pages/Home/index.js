import React from 'react';

import MineField from '../../components/MineField';

import {useBoard} from '../../hooks/board';

import * as S from './styles';

const Home = () => {
  const board = useBoard();
  return (
    <S.SafeAreaContainer>
      <S.HeaderContainer />
      <S.BoardContainer>
        <MineField />
      </S.BoardContainer>
      <S.FooterContainer />
    </S.SafeAreaContainer>
  );
};

export default Home;
