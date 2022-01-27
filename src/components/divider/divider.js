import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Divider: {
      width: '100%',
      borderBottom: '1px solid #383B41',
      margin: [theme.spacing(1), 0],
    },
  }
));

export const Divider = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <div className="Divider">
      </div>
    </PatchStyles>
  );
};
