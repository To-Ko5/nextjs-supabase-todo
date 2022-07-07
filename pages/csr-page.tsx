import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'

const CsrPage: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    const getTasks = async () => {
      const { data: tasks } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true })
      setTasks(tasks as Task[])
    }

    const getNotices = async () => {
      const { data: notices } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true })
      setNotices(notices as Notice[])
    }
    getTasks()
    getNotices()
  }, [])
  return (
    <Layout title="csr page">
      <p className="mb-3 text-blue-500">CSR</p>
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
    </Layout>
  )
}

export default CsrPage
