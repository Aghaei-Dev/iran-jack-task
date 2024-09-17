import { useState, useEffect } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export const useToggle = (initialState) => {
  const [toggleValue, setToggleValue] = useState(initialState)

  const toggler = () => setToggleValue((prev) => !prev)

  return [toggleValue, toggler]
}
export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      console.log('Copied to clipboard:', content)
    } catch (error) {
      setIsCopied(false)
      console.error('Unable to copy to clipboard:', error)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [isCopied])

  return { isCopied, copyToClipboard }
}
