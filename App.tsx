import 'react-native-get-random-values'
import './src/libs/dayjs'

import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useNetInfo } from '@react-native-community/netinfo'

import { AppProvider, UserProvider } from '@realm/react'
import { RealmProvider, syncConfig } from './src/libs/realm'

import SignIn from './src/screens/SignIn'
import Loading from './src/components/Loading'

import NetMessage from './src/components/NetMessage'

import { Routes } from './src/routes'

import { REALM_ID } from '@env'

const App = () => {
  const [ fontsLoaded, fontError ] = useFonts({
    'raw-line': require('./assets/fonts/Rawline/rawline-400.ttf')
  })
  const netInfo = useNetInfo();

  // In case of fuck with database schema
  // console.log('Realm path: ', Realm.defaultPath)

  if (!Loading) {
    return (
      <Loading />
    )
  }

  return (
    <SafeAreaProvider>
      <AppProvider id={REALM_ID}>
        <ThemeProvider theme={{
          color: 'white'
        }}>

          {
            !netInfo.isConnected && 
            <NetMessage 
            title='Você está off line'
          />
          }

          <UserProvider fallback={SignIn}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </ThemeProvider>
      </AppProvider>
    </SafeAreaProvider>
  )
}

export default App