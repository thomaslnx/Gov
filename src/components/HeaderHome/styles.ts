import { Image } from 'expo-image'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 32px;
  flex-direction: row;
  align-items: center;

  background-color: #1f3568;
`;

export const Greeting = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Message = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`;

export const Picture = styled(Image)`
  width: 54px;
  height: 54px;
  border-radius: 50px;
`;