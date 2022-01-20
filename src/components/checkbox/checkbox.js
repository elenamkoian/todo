import * as classes from './checkbox.module.scss';
import PatchStyles from 'patch-styles';

export const Checkbox = ({ checked, label }) => {
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

