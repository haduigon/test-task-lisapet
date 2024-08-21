import questionIconGrey from "../assets/icons/questionIconGrey.png";
import styles from './QuestionIcon.module.scss';

const QuestionIcon = () => {
  return (
    <>
      <img src={questionIconGrey} className={styles.questionIcon}/>
    </>
  )
}

export default QuestionIcon;