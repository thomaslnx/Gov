import { WifiSlash } from 'phosphor-react-native'


import { Container, Title } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NetMessageProps = {
  title: string;
}

const NetMessage = ({ title }: NetMessageProps) => {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 5

  return (
    <Container style={{ paddingTop }}>
      <WifiSlash size={18}/>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default NetMessage