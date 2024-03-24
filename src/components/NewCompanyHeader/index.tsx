import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { Container, Title } from './styles'

const NewCompanyHeader = () => {
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()
  const paddingTop = insets.top + 42

  return (
    <Container style={{
      paddingTop
    }}>
      <TouchableOpacity 
        
        onPress={goBack}
      >
        <ArrowLeft size={24} weight='bold' color='#235efc' />
      </TouchableOpacity>

      <Title>Nova Empresa</Title>
    </Container>
  )
}

export default NewCompanyHeader
