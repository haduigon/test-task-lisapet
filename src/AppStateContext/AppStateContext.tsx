import React from 'react';
import { Dispatch, useReducer } from 'react';
// import { ACTIONS } from '../utils';
import { inputId } from '../utils';

type Action = {}

interface App {
  inputId: string;
}

type State = {
  state: App,
  dispatch: Dispatch<Action>,
}

function reducer(state: App, action: Action) {
  return state;
}

const initialState: State = {
  state: {
    inputId: inputId,
  },
  dispatch: () => { }
};

export const AppStateContext = React.createContext(initialState);

type Props = {
  children: React.ReactNode;
}

export const AppStateContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);
  return (
    <AppStateContext.Provider value={{
      state: {
        ...state,
      },
      dispatch,
    }}>
      {children}
    </AppStateContext.Provider>
  )
}