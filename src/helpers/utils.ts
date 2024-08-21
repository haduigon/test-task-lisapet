import { useCallback, useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";

export enum ACTIONS {
  MAP_PROPS_TOP_STATE,
  SET_SHOW_POPUP_INFO,
  SET_SHOW_POPUP_QUESTION,
  SET_INPUT_VALUE,
}

export function useHandleChange() {
  const { state, dispatch } = useContext(AppStateContext);

  const handleChange = useCallback((data: React.ChangeEvent<HTMLInputElement>) => {
    state.onChange(data);
    console.log(data.target.checkValidity(), 'validity');
    
    dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: data?.target.value });
  }, [state, dispatch]);

  return handleChange;
}

export const inputId = "testLisapetInputId";
