import { useContext } from 'react';
import styles from './TextIcon.module.scss';
import { AppStateContext } from '../AppStateContext/AppStateContext';
import classNames from 'classnames';

const TextIcon = () => {
  const { state } = useContext(AppStateContext);
  return (
    <div
      className={classNames(`${styles.iconTextBox}`, {
        [styles.dark]: state.darkMode,
      })}
      // className={`${styles.iconTextBox}`}
    >
      <span className={styles.iconText}>⌘</span>
      <span className={styles.iconText}>K</span>
    </div>
  );
};

export default TextIcon;