import { TouchableOpacity } from 'react-native'
import { Power } from 'phosphor-react-native'
import { useUser, useApp } from '@realm/react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import React from 'react'
import { Container, Greeting, Message, Name, Picture } from './styles'

const HeaderHome = () => {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 20

  const handleLogout = () => {
    app.currentUser?.logOut()
  }

  return (
    <Container style={{ paddingTop }}>
      <Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder=""
      />
      <Greeting>
        <Message>
          Olá
        </Message>

        <Name>
          {user.profile.name}
        </Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color='white'/>
      </TouchableOpacity>
    </Container>
  )
}

export default HeaderHome