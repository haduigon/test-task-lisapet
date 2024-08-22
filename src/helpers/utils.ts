import { useCallback, useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";

export enum ACTIONS {
  MAP_PROPS_TOP_STATE,
  SET_SHOW_POPUP_INFO,
  SET_SHOW_POPUP_QUESTION,
  SET_INPUT_VALUE,
  SET_ERROR,
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
      const isRequiredAndEmpty = state.isRequired && data.target.value.length === 0;
      if (!data.target.checkValidity() || isRequiredAndEmpty) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: true });
      } else {
        dispatch({ type: ACTIONS.SET_ERROR, payload: false });
      }
    }, [dispatch, state]
  );

  return validateInput;
}

export const inputId = "testLisapetInputId";
