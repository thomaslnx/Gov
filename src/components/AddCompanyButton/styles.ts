import styled from 'styled-components/native'

export const Container = styled.View`
  width: 80%;
  height: 77px;
  border-radius: 7px;

  background-color: #4d87ab;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  `;

  export const IconContainer = styled.TouchableOpacity`
    width: 70%;
    height: 60px;
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
    padding-left: 10px;
  `;

  export const Command = styled.Text`
    color: #ffffff;
    font-size: 16px;
    margin-left: 10px;
  `;