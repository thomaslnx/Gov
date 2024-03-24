import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '@realm/react'

import NewCompanyHeader from '../../components/NewCompanyHeader'
import { Container, ContentContainer, InputsContainer } from './styles'

import CorporateReason from '../../components/CorporateReason'
import FantasyName from '../../components/FantasyName'
import Cnpj from '../../components/Cnpj'
import Address from '../../components/Address'
import Zipcode from '../../components/ZipCode'
import Neighborhood from '../../components/Neighborhood'
import BusinessDescription from '../../components/BusinessDescription'
import State from '../../components/State'
import Abbreviation from '../../components/Abbreviation'
import Phone from '../../components/Phone'
import SaveCompanyButton from '../../components/SaveCompanyButton'

import { useRealm } from '../../libs/realm'
import { Companies } from '../../libs/realm/schemas/Companies'

const NewCompany = () => {
  const [corporateReason, setCorporateReason] = useState('')
  const [fantasyName, setFantasyName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [businessDescription, setBusinessDescription] = useState('')
  const [countryState, setCountryState] = useState('')
  const [abbreviation, setAbbreviation] = useState('')
  const [phone, setPhone] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const realm = useRealm()
  const currentUser = useUser()
  const { goBack } = useNavigation()

  const keyboardAvoidViewBehavior = Platform.OS === 'android' ? 'height' : 'position'
  const handleSaveCompany = () => {
    try {
      setIsSaving(true)

      realm.write(() => {
        realm.create('Companies', Companies.generate({
          user_id: currentUser!.id,
          corporate_reason: corporateReason,
          fantasy_name: fantasyName,
          cnpj: cnpj,
          address: address,
          zip_code: zipCode,
          neighborhood: neighborhood,
          business_description: businessDescription,
          state: countryState,
          abbreviation: abbreviation,
          phone: phone,
        }))
      })

      Alert.alert('Cadastro realizado com Sucesso!')
      goBack()

    } catch (err) {
      console.log(err)
      setIsSaving(false)
      Alert.alert('Erro', 'Erro ao salvar nova empresa')
    }
  }

  return (
    <Container>
      <NewCompanyHeader />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidViewBehavior}>
        <InputsContainer>
          <ContentContainer>
            <CorporateReason label='Razão Social' onChangeText={setCorporateReason}/>
          </ContentContainer>

          <ContentContainer>
            <FantasyName label='Nome Fantasia' onChangeText={setFantasyName}/>
          </ContentContainer>

          <ContentContainer>
            <Cnpj label='CNPJ' onChangeText={setCnpj}/>
          </ContentContainer>

          <ContentContainer>
            <Address label='Endereço' onChangeText={setAddress}/>
          </ContentContainer>

          <ContentContainer>
            <Zipcode label='CEP' onChangeText={setZipCode}/>
          </ContentContainer>

          <ContentContainer>
            <Neighborhood label='Bairro' onChangeText={setNeighborhood}/>
          </ContentContainer>

          <ContentContainer>
            <BusinessDescription label='Descrição do Negócio' onChangeText={setBusinessDescription}/>
          </ContentContainer>

          <ContentContainer>
            <State label='Estado' onChangeText={setCountryState}/>
          </ContentContainer>

          <ContentContainer>
            <Abbreviation label='UF' onChangeText={setAbbreviation}/>
          </ContentContainer>

          <ContentContainer>
            <Phone label='Telefone' onChangeText={setPhone}/>
          </ContentContainer>


          <SaveCompanyButton 
            title="Salvar Empresa"
            isLoading={isSaving}
            onPress={handleSaveCompany}
          />
        </InputsContainer>
      </KeyboardAvoidingView>

    </Container>
  )
}

export default NewCompany