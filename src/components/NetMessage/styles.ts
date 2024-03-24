import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const dimensions = Dimensions.get('window')

export const Container = styled.View`
  width: ${dimensions.width}px;

  position: absolute;
  z-index: 10;

  background-color: red;
  padding-bottom: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #3d4245;
  font-size: 14px;

  margin-left: 4px;
`;