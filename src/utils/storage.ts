import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

const fetchDataFromStorage = async (key: string) => {
  try {
    const data = await Storage.get({ key })
    return data.value
  } catch (error) {
    console.log(`Unable to fetch key "${key}" from storage. error: ${error}`)
    return undefined
  }
}

const saveDataToStorage = async (key: string, value: any) => {
  try {
    await Storage.set({ key, value: value.toString() })
    return true
  } catch (error) {
    console.log(`Unable to save key "${key}" to storage. error: ${error}`)
    return false
  }
}

export { fetchDataFromStorage, saveDataToStorage }
