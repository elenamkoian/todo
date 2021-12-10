import './checkbox.scss';

export const Checkbox = ({ checked, label }) => {
  return (
    <label className="CheckboxContainer">
      <input type="checkbox" hidden />
      <div className="CheckBox" />
      <span className="Label">{label}</span>
    </label>
  );
};
