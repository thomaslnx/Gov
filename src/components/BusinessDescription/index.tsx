import { TextInputProps } from 'react-native'
import { Container, Label, Input } from './styles';

type InputProps = TextInputProps & {
  label: string;
}

const BusinessDescription = ({ label, ...rest }: InputProps ) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <Input 
        autoCapitalize='sentences'
        placeholderTextColor='#252626'
        multiline
        {...rest}
      />
    </Container>
  )
}

export default BusinessDescription