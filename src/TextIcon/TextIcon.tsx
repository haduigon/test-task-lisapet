import styles from './TextIcon.module.scss';

const TextIcon = () => {
  return (
    <div className={`${styles.iconTextBox}`}>
      <span className={styles.iconText}>⌘</span>
      <span className={styles.iconText}>K</span>
    </div>
  );
};

export default TextIcon;