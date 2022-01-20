import * as classes from './divider.module.scss';
import PatchStyles from 'patch-styles';

export const Divider = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="Divider">
      </div>
    </PatchStyles>
  );
};
