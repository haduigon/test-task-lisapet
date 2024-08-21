import { useContext } from 'react';
import styles from './PopUp.module.scss';
import { AppStateContext } from '../AppStateContext/AppStateContext';
import classNames from 'classnames';

type Props = {
  destination?: 'info' | 'question',
}

const PopUp: React.FC<Props> = ({ destination = 'info' }) => {
  const { state } = useContext(AppStateContext)
  return (
    <div className={classNames(styles.boxInfo, {
      [styles.boxQuestion]: destination == 'question'
    })}>
      <div className={styles.tooltip}>{state.popUpText}</div>
    </div>
  )
}

export default PopUp;