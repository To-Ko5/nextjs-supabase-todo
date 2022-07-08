import { FC } from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { Loading } from './Loading'
import { TaskItem } from './TaskItem'

export const TaskList: FC = () => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') return <Loading />
  if (status === 'error') return <p>{'Error'}</p>
  return (
    <ul className="my-2">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  )
}
