import { useNavigation } from '@react-navigation/native'
import { FolderNotchPlus } from 'phosphor-react-native'

import { Container, IconContainer, Command } from './styles'

const AddCompanyButton = () => {
  const { navigate } = useNavigation()
  const handleAddNewCompany = () => {
    navigate('newCompany')
  }

  return (
    <Container>
      <IconContainer activeOpacity={0.7} onPress={handleAddNewCompany}>
        <FolderNotchPlus size={50} color='#ffffff'/>
        <Command>Adcione uma nova empresa</Command>
      </IconContainer>
    </Container>
  )
}

export default AddCompanyButton