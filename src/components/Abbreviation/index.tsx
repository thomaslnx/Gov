import { TextInputProps } from 'react-native'
import { Container, Label, Input } from './styles';

type InputProps = TextInputProps & {
  label: string;
}

const Abbreviation = ({ label, ...rest }: InputProps ) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <Input
        maxLength={2}
        autoCapitalize='characters'
        placeholderTextColor='#252626'
        {...rest}
      />
    </Container>
  )
}

export default Abbreviation