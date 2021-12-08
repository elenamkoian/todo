import './page-content.scss'
import { TaskList } from '../task-list/task-list';
import { TaskDetails } from '../task-details/task-details';

export const PageContent = () => {
  return (
    <div className="PageContent">
      <TaskList />
      <TaskDetails />
    </div>
  )
}
