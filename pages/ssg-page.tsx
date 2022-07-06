import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'

type StaticProps = {
  tasks: Task[]
  notices: Notice[]
}

const SsgPage: NextPage<StaticProps> = ({ tasks, notices }) => {
  return (
    <Layout title="SSG Page">
      <p className="mb-3 text-blue-500"></p>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>
        })}
      </ul>
      <ul>
        {notices.map((notice) => {
          return <li key={notice.id}>{notice.content}</li>
        })}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: tasks } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })
  const { data: notices } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: true })
  return { props: { tasks, notices } }
}

export default SsgPage
