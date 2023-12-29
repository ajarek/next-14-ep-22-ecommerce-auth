export const saveStorage = (newData: any, name: string) => {
  const localStorageData = localStorage.getItem(name)
  let data
  localStorageData === null
    ? (data = [])
    : (data = JSON.parse(localStorageData))
  data.push(newData)
  localStorage.setItem(name, JSON.stringify(data))
}
export const saveStorageSingle = (newData: any, name: string) => {
  localStorage.setItem(name, JSON.stringify(newData))
}
export const fetchStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key)|| '{}')
}
export const deleteStorage = (key: string) => {
  return localStorage.removeItem(key)
}