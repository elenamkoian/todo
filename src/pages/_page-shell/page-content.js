import { TaskList } from './task-list/task-list';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    PageContent: {
      display: 'flex',
      gap: theme.spacing(8),
      marginTop: theme.spacing(3),
      height: 'auto',
    },
  }
));

export const PageContent = ({ children }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="PageContent">
        <TaskList />

        {children}
      </div>
    </PatchStyles>
  );
};
