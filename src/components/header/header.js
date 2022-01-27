import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Header: {
      display: 'flex',
      alignItems: 'center',
      height: theme.spacing(8),
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      paddingLeft: theme.spacing(8),
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    },
  }
));

export const Header = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <span>Doit</span>
      </div>
    </PatchStyles>
  );
};
