import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 90%;

  background-color: #4d87ab;
  padding: 20px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 6px;
  margin: 12px 0;

  align-self: center;
`;

export const ListCompanies = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CorporateReason = styled.Text`
  color: #ffffff;
`;

export const Cnpj = styled.Text`
  color: #ffffff;
`;

export const FantasyName = styled.Text`
  color: #ffffff;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;