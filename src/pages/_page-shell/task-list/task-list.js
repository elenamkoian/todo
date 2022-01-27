import { TaskListItem } from './task-list-item/task-list-item';
import { CreateTaskListItem } from './create-task-list-item/create-task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../../store';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TaskList: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      margin: [0, theme.spacing(2.5)],
    },
  }
));

export const TaskList = () => {
  const classes = useStyles();
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskList">
        {
          taskList.map((task, index) => (
            <TaskListItem
              key={index}
              index={index}
              task={task}
            />
          ))
        }

        <CreateTaskListItem />
      </div>
    </PatchStyles>
  );
};
