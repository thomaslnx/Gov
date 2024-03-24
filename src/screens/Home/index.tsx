import { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import { Realm } from '@realm/react'

import { useQuery, useRealm } from '../../libs/realm'

import HeaderHome from '../../components/HeaderHome'
import AddCompanyButton from '../../components/AddCompanyButton'
import CompaniesList, { CompaniesProps } from '../../components/CompaniesList'

import { Container, Label } from './styles'
import { Companies } from '../../libs/realm/schemas/Companies'
import { getLastAsyncTimestamp, saveLastSyncTimestamp } from '../../libs/asyncStorage/syncStorage'

const Home = () => {
  const [companiesList, setCompaniesList] = useState<CompaniesProps[]>([])

  const companiesHistory = useQuery(Companies)
  const realm = useRealm()

  const progressNotification = async (transferred: number, transferable: number) => {
    const uploadPercentage = ( transferred / transferable ) * 100

    if (uploadPercentage === 100) {
      await saveLastSyncTimestamp()
      handleFetchCompany()
    }
  }

  useEffect(() => {
    handleFetchCompany()
  }, [companiesHistory])


  // This listener is breaking the dabase syncing
  // useEffect(() => {
  //   realm.addListener('change', () => handleFetchCompany())
  //   return () => realm.removeListener('change', handleFetchCompany)
  // }, [])

  useEffect(() => {
    realm.subscriptions.update((subs, realm) => {
      const companies = realm.objects('Companies')

      subs.add(companies,{ name: 'all_companies' })
    })
  }, [realm])

  useEffect(() => {
    const syncSession = realm.syncSession

    if (!syncSession) {
      return
    }

    syncSession.addProgressNotification(
      Realm.ProgressDirection.Upload,
      Realm.ProgressMode.ReportIndefinitely,
      progressNotification
    )

    return () => syncSession.removeProgressNotification(progressNotification)
  }, [])
  
  const handleFetchCompany = async () => {
    try {
      const lastSync = await getLastAsyncTimestamp()

      const formattedList = companiesHistory.map((company) => {
        return ({
          id: company._id.toString(),
          corporateReason: company.corporate_reason,
          fantasyName: company.fantasy_name,
          cnpj: company.fantasy_name,
          isSync: lastSync > company.updated_at!.getTime()
        })
      })
      
      setCompaniesList(formattedList)
    } catch (err) {
      Alert.alert('Erro', 'Erro na exibição da lista de empresas')
    }
  }

  return(
    <Container>
      <HeaderHome />

      <AddCompanyButton />

      <FlatList
        data={companiesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CompaniesList
            data={item}
        />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={(
          <Label>
            Não há nenhum registro no momento!
          </Label>
        )}
      />
    </Container>
  )
}

export default Home