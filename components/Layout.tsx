import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { BadgeCheckIcon } from '@heroicons/react/solid'

type Title = {
  title: string
  children: ReactNode
}

const Layout: FC<Title> = ({ children, title = 'Todo App' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-semibold text-gray-900"></div>
  )
}

export default Layout
