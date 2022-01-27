import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    CreateTaskListItem: {
      display: 'flex',
      minWidth: theme.spacing(52),
      borderRadius: theme.spacing(2),
      border: '1px solid #383B41',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    CreateTaskListItemAvatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      width: theme.spacing(8),
      height: theme.spacing(8),
      backgroundColor: theme.palette.text.primary,
      cursor: 'pointer',
      margin: theme.spacing(2.5),
    },
    AddInfoDiv: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing(0.5),
    },
    CreateTaskListItemTitle: {
      fontSize: theme.spacing(2.5),
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      outline: 'none',
      border: 'none',
      color: theme.palette.text.primary,
    },
  }
));

export const CreateTaskListItem = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <Link
        to="/create"
        className="CreateTaskListItem"
      >
        <span className="CreateTaskListItemAvatar"><FontAwesomeIcon icon={faPlus} /></span>
        <div className="AddInfoDiv">
          <p className="CreateTaskListItemTitle">Add a task</p>
        </div>
      </Link>
    </PatchStyles>
  );
};
