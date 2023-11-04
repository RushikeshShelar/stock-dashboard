import { MoonIcon } from '@heroicons/react/solid'
import React from 'react'

const ThemeIcon = () => {
  return (
    <button className='rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-28 shadow-lg '>
        <MoonIcon className='h-6 w-6 cursor-point stroke-1 fill-none stroke-neutral-400'/>
    </button>
  )
}

export default ThemeIcon
