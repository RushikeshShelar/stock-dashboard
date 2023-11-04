import { MoonIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };
  return (
    <button
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-28 shadow-lg ${darkMode
          ? 'shadow-gray-700'
          : null
        }`}
      onClick={toggleDarkMode}>
      <MoonIcon className={`h-6 w-6 cursor-point stroke-1 fill-none  ${darkMode
          ? 'fill-yellow-400 stroke-yello-400'
          : 'fill-none stroke-neutral-400'
        }`} />
    </button>
  )
}

export default ThemeIcon
