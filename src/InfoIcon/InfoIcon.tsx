import infoIcon from '../assets/icons/infoIcon.png';
import styles from './InfoIcon.module.scss';
import PopUp from '../PopUp';
import { useContext } from 'react';
import { AppStateContext } from '../AppStateContext/AppStateContext';
import { ACTIONS } from '../helpers/utils';

const InfoIcon = () => {

  const {state, dispatch} = useContext(AppStateContext)
  
  return (
    <div className='centered-flex ml-5'>
      {state.showPopUpInfo && <PopUp />}
      <img
        src={infoIcon}
        alt='info-icon'
        className={styles.infoIcon}
        onMouseOver={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_INFO, payload: true })}
        onMouseOut={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_INFO, payload: false })}
      />
    </div>
  )
}

export default InfoIcon;