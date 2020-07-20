import React from 'react';
import PropTypes from 'prop-types';

import {useBoard} from '../../hooks/board';

import * as S from './styles';

const Field = ({opened, nearMinesQuantity, mined, exploded, flagged}) => {
  const board = useBoard();
  return (
    <S.ButtonContainer onPress={() => {}}>
      <S.Container
        blockSize={board.blockSize}
        opened={opened}
        exploded={exploded}>
        {opened && nearMinesQuantity > 0 && (
          <S.FieldText nearMinesQuantity={nearMinesQuantity}>
            {nearMinesQuantity}
          </S.FieldText>
        )}
        {opened && mined && (
          <S.FieldBomb name="bomb" blockSize={board.blockSize} />
        )}
        {flagged && !opened && (
          <S.FieldFlag name="flag" blockSize={board.blockSize} />
        )}
      </S.Container>
    </S.ButtonContainer>
  );
};

Field.propTypes = {
  opened: PropTypes.bool,
  mined: PropTypes.bool,
  exploded: PropTypes.bool,
  flagged: PropTypes.bool,
  nearMinesQuantity: PropTypes.number,
};

Field.defaultProps = {
  opened: false,
  mined: false,
  exploded: false,
  flagged: false,
  nearMinesQuantity: null,
};

export default Field;
