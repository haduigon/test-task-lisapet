import { useCallback, useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";

export enum ACTIONS {
  MAP_PROPS_TOP_STATE,
  SET_SHOW_POPUP,
  SET_INPUT_VALUE,
}

export function useHandleChange() {
  const { state, dispatch } = useContext(AppStateContext);

  const handleChange = useCallback((data: React.ChangeEvent<HTMLInputElement>) => {
    state.onChange(data);
    dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: data?.target.value });
  }, [state, dispatch]);

  return handleChange;
}

export const inputId = "testLisapetInputId";
