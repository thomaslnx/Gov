import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  min-width: 300px; 
  max-width: 500px;
  border-radius: 6px;
  margin-top: 40px;

  align-items: center;
  justify-content: center;
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