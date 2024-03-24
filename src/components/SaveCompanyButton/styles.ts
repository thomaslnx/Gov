import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 370px; 
  border-radius: 6px;
  margin-bottom: 40px;

  align-items: center;
  justify-content: center;

  align-self: center;
  background-color: #0c1a4a;
`;

export const ButtonTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  /* font-family: 'raw-line'; */
`;

export const ButtonLoading = styled.ActivityIndicator`
  color: #ffffff;
`;