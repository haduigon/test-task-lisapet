import questionIconGrey from "../assets/icons/questionIconGrey.png";
import styles from './QuestionIcon.module.scss';
import PopUp from "../PopUp";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { ACTIONS } from "../helpers/utils";

const QuestionIcon = () => {
  const { state, dispatch } = useContext(AppStateContext)
  return (
    <>
      {state.showPopUpQuestion && <PopUp />}
      <img
        src={questionIconGrey}
        className={styles.questionIcon}
        onMouseOver={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_QUESTION, payload: true })}
        onMouseOut={() => dispatch({ type: ACTIONS.SET_SHOW_POPUP_QUESTION, payload: false })}
      />
    </>
  )
}

export default QuestionIcon;