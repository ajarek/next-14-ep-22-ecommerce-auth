
export const saveStorage = (newData: any, name: string): void => {
  const localStorageData: string | null = localStorage.getItem(name);
  let data: any[];

  if (localStorageData === null) {
    data = [];
  } else {
    data = JSON.parse(localStorageData);
  }

  data.push(newData);
  localStorage.setItem(name, JSON.stringify(data));
};
export const saveStorageSingle = (newData: any, name: string) => {
  localStorage.setItem(name, JSON.stringify(newData))
}
export const fetchStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key)|| '{}')
}
export const deleteStorage = (key: string) => {
  return localStorage.removeItem(key)
}