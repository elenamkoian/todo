import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    CheckboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    CheckBox: {
      height: theme.spacing(3),
      cursor: 'pointer',
      width: theme.spacing(3),
      border: '1px solid grey',
      display: 'flex',
      borderRadius: theme.spacing(1),
      boxSizing: 'border-box',
    },
  }
));

export const Checkbox = ({ checked, label }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <label className="CheckboxContainer">
        <input type="checkbox" hidden />
        <div className="CheckBox" />
        <span className="Label">{label}</span>
      </label>
    </PatchStyles>
  );
};

