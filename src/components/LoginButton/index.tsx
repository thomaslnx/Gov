import { TouchableOpacityProps } from 'react-native'

import { ButtonLoading, ButtonTitle, Container } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

const LoginButton = ({ title, isLoading = false, ...rest }: ButtonProps) => {
  return (
    
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading ? <ButtonLoading /> : <ButtonTitle> {title} </ButtonTitle>
      }
    </Container>
  )
}

export default LoginButton