import { useState } from "react"

export const useLocalStorage = <T>(item: string) => {
  const localStorageItem = localStorage.getItem(item)

  if (!localStorageItem) localStorage.setItem(item, JSON.stringify([]))

  const [value, setValue] = useState(JSON.parse(localStorageItem ?? '[]'))
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return { value, updateLocalStorage }
}