import questionIconGrey from "../assets/icons/questionIconGrey.png";
import styles from './QuestionIcon.module.scss';
import PopUp from "../PopUp";

const QuestionIcon = () => {
  return (
    <>
      <PopUp />
      <img src={questionIconGrey} className={styles.questionIcon}/>
    </>
  )
}

export default QuestionIcon;