import React from "react";
import { Dispatch, useReducer } from "react";
import { ACTIONS, inputId } from "../helpers/utils";

interface App {
  inputId: string;
  annotation?: string;
  size?: "s" | "m" | "l" | "xl";
  alignment?: "left" | "right";
  border?: boolean;
  iconBefore?: boolean;
  iconAfter?: boolean;
  shortKey?: boolean;
  isRequired?: {
    required: boolean;
    type?: string;
  };
  label?: string;
  type: string;
  showPopUp?: boolean;
  popUpText?: string;
  value?: string;
  labelPosition: "top" | "side";
  popUpDestination: "info" | "question";
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
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
  | { type: ACTIONS.SET_SHOW_POPUP; payload: boolean }
  | { type: ACTIONS.SET_INPUT_VALUE; payload: string };

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
    case ACTIONS.SET_SHOW_POPUP:
      return {
        ...state,
        showPopUp: action.payload,
      };
    case ACTIONS.SET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
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
    },
    label: "",
    type: "",
    showPopUp: false,
    popUpText: "",
    value: "",
    labelPosition: "top",
    popUpDestination: "info",
    onChange: () => {},
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
