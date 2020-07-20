import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

MaterialCommunityIcons.loadFont();
Fontisto.loadFont();

export const ButtonContainer = styled.TouchableWithoutFeedback``;

function backgroundSwitch({opened, exploded}) {
  if (opened) {
    if (exploded) return '#FF5757';
    return '#DAD9D9';
  }
  return '#FFF';
}

export const Container = styled.View`
  width: ${({blockSize}) => blockSize}px;
  height: ${({blockSize}) => blockSize}px;
  border-radius: 2px;
  border-top-width: ${({opened, exploded}) => {
    if (opened && !exploded) return 2;
    return 0;
  }}px;
  border-bottom-width: ${({opened}) =>
    opened ? StyleSheet.hairlineWidth : 0}px;
  background-color: ${(props) => backgroundSwitch(props)};
  border-color: ${({opened}) => (opened ? '#BDBDC9' : '#3D3D48')};
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

function colorSwitch(nearMinesQuantity) {
  switch (nearMinesQuantity) {
    case 1:
      return '#2A28D7';
    case 2:
      return '#28520F';
    case 3:
    case 4:
    case 5:
      return '#F9060A';
    default:
      return '#F221A9';
  }
}

export const FieldText = styled.Text`
  color: ${({nearMinesQuantity}) => colorSwitch(nearMinesQuantity)};
`;

export const FieldBomb = styled(MaterialCommunityIcons)`
  color: #454344;
  font-size: ${({blockSize}) => blockSize * 0.75}px;
`;

export const FieldFlag = styled(Fontisto)`
  color: #f56969;
  font-size: ${({blockSize}) => blockSize * 0.55}px;
`;
