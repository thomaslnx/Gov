import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import NewCompany from '../screens/NewCompany'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newCompany" component={NewCompany} />
    </Navigator>
  )
}