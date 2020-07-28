import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e7e7;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: red;
`;

export const BoardContainer = styled.View`
  height: ${height * 0.7}px;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: blue;
`;
