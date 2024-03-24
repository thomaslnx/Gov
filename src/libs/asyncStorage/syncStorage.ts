import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_ASYNC_KEY = '@gov:last_sync'

export const saveLastSyncTimestamp = async () => {
  const timestamp = new Date().getTime()

  await AsyncStorage.setItem(STORAGE_ASYNC_KEY, timestamp.toString())

  return timestamp
}

export const getLastAsyncTimestamp = async () => {
  const response = await AsyncStorage.getItem(STORAGE_ASYNC_KEY)

  return Number(response)
}