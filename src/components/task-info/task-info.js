import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    TaskInfo: {
      display: 'flex',
      color: theme.palette.text.primary,
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
    },
    Avatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      width: theme.spacing(7.5),
      height: theme.spacing(7.5),
      // padding: theme.spacing(2.5),
    },
    ItemInfoDiv: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
      padding: [theme.spacing(1), theme.spacing(2)], //'8px 16px',
    },
    ItemTitle: {
      margin: 0,
      width: theme.spacing(32),
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      fontSize: theme.spacing(2.5),

      '&:focus': {
        border: '1px solid #383B41',
        backgroundColor: 'transparent',
      },
    },
    ItemDescription: {
      fontSize: 14,
      fontFamily: theme.typography.fontFamily,
      color: 'grey',
      margin: 0,
    },
  }
));

export const TaskInfo = ({ task }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="TaskInfo">
        <img className="Avatar" src={task.avatar} alt='avatar' />
        <div className="ItemInfoDiv">
          <p className="ItemTitle">{task.title}</p>
          <p className="ItemDescription">{task.description}</p>
        </div>
      </div>
    </PatchStyles>
  );
};
