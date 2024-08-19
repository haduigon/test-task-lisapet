import styles from './CommandSymbol.module.scss'

const CommandSymbol = () => {
  return (
    <div className={styles.circle}>
        <div className={styles.questionMarkContainer}>
        <div className={styles.questionMark}></div>
        <div className={styles.questionMarkDot}></div>
    </div>
    </div>
  )
}

export default CommandSymbol;