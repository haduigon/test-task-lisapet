import styles from './QuestionIcon.module.scss';
import PopUp from "../PopUp";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { ACTIONS, useQuestionIqonHook } from "../helpers/utils";

const QuestionIcon = () => {
  const { state, dispatch } = useContext(AppStateContext);

  const chooseIcon = useQuestionIqonHook('question')

  return (
    <>
      {state.showPopUpQuestion && <PopUp />}
      <img
        src={chooseIcon()}
        className={styles.questionIcon}
        onMouseOver={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_QUESTION, payload: true })}
        onMouseOut={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_QUESTION, payload: false })}
      />
    </>
  )
}

export default QuestionIcon;