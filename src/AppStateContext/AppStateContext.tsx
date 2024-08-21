import React from "react";
import { Dispatch, useReducer } from "react";
// import { ACTIONS } from '../helpers/';
import { ACTIONS, inputId } from "../helpers/utils";

interface App {
  inputId: string;
  annotation?: string;
  size?: string;
  alignment?: string;
  border?: boolean;
  iconBefore?: boolean;
  iconAfter?: boolean;
  shortKey?: boolean;
  isRequired?: {
    required: boolean;
    type: string;
  };
  label?: string;
  // [key: string]: boolean | string | { required: boolean; type: string; } | undefined;
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
            } | undefined;
      }
    }
  | { type: ACTIONS.SET_LABEL; payload: string };

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
    case ACTIONS.SET_LABEL:
      return {
        ...state,
        label: action.payload,
      };
  }
  // return state;
}

const initialState: State = {
  state: {
    inputId: inputId,
    annotation: "This is a hint text to help user",
    size: "",
    alignment: "",
    border: true,
    iconBefore: false,
    iconAfter: false,
    shortKey: false,
    isRequired: {
      required: false,
      type: "",
    },
    label: "",
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
