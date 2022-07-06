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
  const router = useRouter()
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
      <Link href="/ssr-page" prefetch={false}>
        <a>ssr</a>
      </Link>
      <Link href="/isr-page" prefetch={false}>
        <a>isr</a>
      </Link>

      <button onClick={() => router.push('/ssr-page')}>router-ssr</button>
      <button onClick={() => router.push('/isr-page')}>router-isr</button>
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
