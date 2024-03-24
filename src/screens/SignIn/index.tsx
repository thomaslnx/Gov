import { useState } from 'react'
import { Alert } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'

import { Container, Logo, Title } from './styles'
import Image from '../../assets/logo-sougov.png'
import LoginButton from '../../components/LoginButton'
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env'

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID
})

const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const app = useApp()

  const handleSignIn = async () => {
    try {
      setIsAuthenticated(true)

      const { idToken } = await GoogleSignin.signIn()
      
      if (idToken) {
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      } else {
        Alert.alert('Login', 'Falha ao Logar')
        setIsAuthenticated(false)
      }

    } catch (err) {
      setIsAuthenticated(false)
      Alert.alert('Login', 'Falha ao Logar')
    }
  }

  return (
    <Container>
      <Logo source={Image}/>
      <Title>Acesse a Área de Usuário</Title>

      <LoginButton title='Entrar com Google' isLoading={isAuthenticated} onPress={handleSignIn}/>
      
    </Container>
  );
}

export default SignIn