import { TextInputProps } from 'react-native'
import { Container, Label, Input } from './styles';

type InputProps = TextInputProps & {
  label: string;

}

const State = ({ label, ...rest }: InputProps ) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <Input 
        autoCapitalize='characters'
        placeholderTextColor='#252626'
        {...rest}
      />
    </Container>
  )
}

export default State