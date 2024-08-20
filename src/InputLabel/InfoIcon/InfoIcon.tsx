import infoIcon from '../../assets/icons/infoIcon.png';
import styles from './InfoIcon.module.scss';

const InfoIcon = () => {
  return (
    <div>
      <img src={infoIcon} alt='info-icon' className={styles.infoIcon} />
    </div>
  )
}

export default InfoIcon;