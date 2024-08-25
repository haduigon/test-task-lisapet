import React from "react";
import { Dispatch, useReducer } from "react";
import { ACTIONS, inputId } from "../helpers/utils";

interface App {
  inputId: string,
  annotation: string,
  size?: "s" | "m" | "l" | "xl",
  alignment?: "left" | "right",
  border?: boolean,
  iconBefore?: boolean,
  iconAfter?: boolean,
  shortKey?: boolean,
  isRequired: {
    required: boolean,
    type?: string,
    text: string,
  };
  label: string,
  type: string,
  placeholder?: string,
  showPopUpInfo?: boolean,
  showPopUpQuestion?: boolean,
  popUpText: string,
  questionText: string
  value?: string,
  hasError: boolean,
  labelSidePosition: boolean,
  disabled: boolean,
  darkMode: boolean,
  // infoIcon: boolean,
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeIconBefore: (data: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeIconAfter: (data: React.ChangeEvent<HTMLInputElement>) => void,
}

type Action =
  | {
      type: ACTIONS.MAP_PROPS_TOP_STATE;
      payload: {
        key: string;
        value:
          | boolean
          | string
          | {
              required: boolean;
              type: string;
            }
          | undefined
          | ((data: React.ChangeEvent<HTMLInputElement>) => void);
      };
    }
  | { type: ACTIONS.SET_SHOW_POPUP_INFO; payload: boolean }
  | { type: ACTIONS.SET_SHOW_POPUP_QUESTION; payload: boolean }
  | { type: ACTIONS.SET_INPUT_VALUE; payload: string }
  | { type: ACTIONS.SET_ERROR; payload: boolean }
  | { type: ACTIONS.SET_DISABLE; payload: boolean }

type State = {
  state: App;
  dispatch: Dispatch<Action>;
};

function reducer(state: App, action: Action) {
  switch (action.type) {
    case ACTIONS.MAP_PROPS_TOP_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ACTIONS.SET_SHOW_POPUP_INFO:
      return {
        ...state,
        showPopUpInfo: action.payload,
      };
    case ACTIONS.SET_SHOW_POPUP_QUESTION:
      return {
        ...state,
        showPopUpQuestion: action.payload,
      };
    case ACTIONS.SET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: action.payload,
      };
    case ACTIONS.SET_DISABLE:
      return {
        ...state,
        disabled: action.payload,
      };
  }
}

const initialState: State = {
  state: {
    inputId: inputId,
    annotation: "",
    size: "m",
    alignment: "left",
    border: true,
    iconBefore: false,
    iconAfter: false,
    shortKey: false,
    isRequired: {
      required: false,
      type: "",
      text: "",
    },
    label: "",
    type: "",
    showPopUpInfo: false,
    showPopUpQuestion: false,
    popUpText: "",
    questionText: "",
    value: "",
    hasError: false,
    labelSidePosition: false,
    disabled: false,
    darkMode: false,
    // infoIcon: false,
    onChange: () => { },
    onChangeIconBefore: () => {},
    onChangeIconAfter: () => {},
  },
  dispatch: () => {},
};

export const AppStateContext = React.createContext(initialState);

type Props = {
  children: React.ReactNode;
};

export const AppStateContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);
  return (
    <AppStateContext.Provider
      value={{
        state: {
          ...state,
        },
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
