
import { ReactElement } from 'react'
import { Container, Loader } from './styles'
import { IStyledComponent } from 'styled-components/native'
import { FastOmit } from 'styled-components/native/dist/types'
import { ActivityIndicatorProps } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator'

type LoadingProps = {
  Loader: IStyledComponent<"native", FastOmit<ActivityIndicatorProps, never>>
}

const Loading = () => {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

export default Loading