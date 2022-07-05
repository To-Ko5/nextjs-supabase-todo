import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'

const SsgPage: NextPage = () => {
  return (
    <div>
      <Layout title="SSG Page">{'ssg'}</Layout>
    </div>
  )
}

export default SsgPage
