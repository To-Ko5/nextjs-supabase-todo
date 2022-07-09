import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../../components/Layout'
import { TaskList } from '../../components/TaskList'
import { TaskForm } from '../../components/TaskForm'
import { NoticeForm } from '../../components/NoticeForm'
import { NoticeList } from '../../components/NoticeList'
import { supabase } from '../../utils/supabase'
import { Task, Notice } from '../../types/types'
import {
  LogoutIcon,
  StatusOnlineIcon,
  DocumentTextIcon
} from '@heroicons/react/solid'

const Dashboard: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="dashboard">
      <LogoutIcon className="mb-6 h-6 w-6 cursor-pointer" onClick={signOut} />
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className=" h-4 w-4 " />
          </div>
          <TaskForm />
          <TaskList />
        </div>
        <div>
          <div className="my-3 flex justify-center ">
            <StatusOnlineIcon className=" h-4 w-4 " />
          </div>
          <NoticeForm />
          <NoticeList />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
