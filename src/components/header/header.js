import * as classes from './header.module.scss';
import PatchStyles from 'patch-styles';

export const Header = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="Header">
        <span>Doit</span>
      </div>
    </PatchStyles>
  );
};
