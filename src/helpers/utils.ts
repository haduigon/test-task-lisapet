import { useCallback, useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import questionIconGrey from "../assets/icons/questionIconGrey.png";
import questionIconRed from "../assets/icons/questionIconRed.png";
import questionIconGreyDisabled from "../assets/icons/questionIconGreyDisabled.png";
import questionIconGreyDark from "../assets/icons/questionIconGreyDark.png";
import questionIconRedDark from "../assets/icons/questionIconRedDark.png";
import searchIconGrey from "../assets/icons/searchIconGrey.png";
import searchIconGreyDisabled from "../assets/icons/searchIconGreyDisabled.png";
import searchIconRed from "../assets/icons/searchIconRed.png";
import searchIconRedDark from "../assets/icons/searchIconRedDark.png";
import searchIconGreyDark from "../assets/icons/searchIconGreyDark.png";

export enum ACTIONS {
  MAP_PROPS_TOP_STATE,
  SET_SHOW_POPUP_INFO,
  SET_SHOW_POPUP_QUESTION,
  SET_INPUT_VALUE,
  SET_ERROR,
  SET_DISABLE,
}

export function useHandleChange() {
  const { state, dispatch } = useContext(AppStateContext);

  const handleChange = useCallback(
    (data: React.ChangeEvent<HTMLInputElement>) => {
      state.onChange(data);

      dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: data?.target.value });
    },
    [state, dispatch]
  );

  return handleChange;
}

export function useValidate() {
  const { state, dispatch } = useContext(AppStateContext);

  const validateInput = useCallback(
    (data: React.ChangeEvent<HTMLInputElement>) => {
      const isRequiredAndEmpty = state.isRequired.required && data.target.value.length === 0;
      if (!data.target.checkValidity() || isRequiredAndEmpty) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: true });
      } else {
        dispatch({ type: ACTIONS.SET_ERROR, payload: false });
      }
    }, [dispatch, state]
  );

  return validateInput;
}

export function useDisable() {
  const { state, dispatch } = useContext(AppStateContext);

  const disableInput = useCallback((data: boolean) => {
    dispatch({ type: ACTIONS.SET_DISABLE, payload: data })
  }, [dispatch, state])
  
  return disableInput;
}

interface IconMap {
  [key: string]: string,
}

const iconMap: IconMap = {
  questionIconRedDark,
  questionIconGreyDark,
  questionIconGreyDisabled,
  questionIconRed,
  questionIconGrey,
  searchIconGrey,
  searchIconRed,
  searchIconRedDark,
  searchIconGreyDark,
  searchIconGreyDisabled,
};

export function useQuestionIqonHook(iconName: any) {
    const { state } = useContext(AppStateContext);
  // console.log(state, iconName);
  
  const chosenQuestionIqon = useCallback(() => {
    if (state.darkMode) {
      if (state.hasError) {
        const iconKey = iconName + "IconRedDark";

        return iconMap[iconKey];
      }
      const iconKey = iconName + "IconGreyDark";
      
      return iconMap[iconKey];
    }
    if (state.disabled) {
      const iconKey = iconName + "IconGreyDisabled";

      return iconMap[iconKey];
    }
    if (state.hasError) {
      const iconKey = iconName + "IconRed";

      return iconMap[iconKey];
    } else {
      const iconKey = iconName + "IconGrey";

      return iconMap[iconKey];
    }
  }, [state]);
  return chosenQuestionIqon;
}

export const inputId = "testLisapetInputId";
