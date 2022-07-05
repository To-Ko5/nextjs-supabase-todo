import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { BadgeCheckIcon } from '@heroicons/react/solid'

type Title = {
  title: string
  children: ReactNode
}

const Layout: FC<Title> = ({ children, title = 'Todo App' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-semibold text-gray-900">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex w-full p-2 text-center">
        <BadgeCheckIcon className="h-5 w-5 text-blue-400" />
      </footer>
    </div>
  )
}

export default Layout
