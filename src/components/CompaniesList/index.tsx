import { TouchableOpacityProps } from 'react-native';
import { Buildings, ClockClockwise, Check } from 'phosphor-react-native'
import { Container, ListCompanies, CorporateReason, Cnpj, FantasyName, ContentContainer } from './styles'

export type CompaniesProps = {
  id: string;
  corporateReason: string;
  fantasyName: string;
  cnpj: string;
  isSync: boolean;
}

type Props = TouchableOpacityProps & {
  data: CompaniesProps
}

const CompaniesList = ({ data, ...rest }: Props) => {
  return (
    <Container>
      <ListCompanies>
        <Buildings />
        <ContentContainer>
          <CorporateReason>
            {data.corporateReason}
          </CorporateReason>

          <FantasyName>
            {data.fantasyName}
          </FantasyName>

          <Cnpj>
            {data.cnpj}
          </Cnpj>
        </ContentContainer>
        
      </ListCompanies>

      {
        data.isSync ? <Check size={24} /> : <ClockClockwise size={24} />
      }
    </Container>
  )
}

export default CompaniesList