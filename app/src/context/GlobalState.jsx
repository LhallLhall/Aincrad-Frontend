import React, { createContext, useReducer, useContext } from "react";

import jwtDecode from "jwt-decode";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  currentUser: user ? jwtDecode(user.access) : null,
  currentUserToken: user ? user.access : null,
  selectedGame: {
    id: 0,
    name: '',
    summary: '',
    genres: [],
    platforms: [],
    cover: {},
    release_dates: [],
    franchises: [],
    companies: [],
    storyline: '',
    rating: 0,
    artworks: []
  },
  gameList: {
    id: 0,
    game_id: 0,
    name: '',
    genres: '',
    platforms: "",
    completed: false,
    release_dates: '',
    franchises: '',
    companies: '',
    storyline: '',
    summary: '',
    rating: 0,
    cover: ''
  },
  usergame: {
    completed: false,
    created_at: "",
    game: 0,
    hours_played: null,
    id: 0,
    timer_started: null,
    timer_status: false,
    updated_at: "",
    user: 1
},
  localStorage: {
    id: 0,
    name: '',
    summary: '',
    genres: [],
    platforms: [],
    cover: {},
    release_dates: [],
    franchises: [],
    companies: [],
    storyline: '',
    rating: 0,
    artworks: []
  },
  localStorageMyGames: {
    id: 0,
    game_id: 0,
    name: '',
    genres: '',
    platforms: "",
    completed: false,
    release_dates: '',
    franchises: '',
    companies: '',
    storyline: '',
    summary: '',
    rating: 0,
    cover: ''
  }
  // gameSearch: []
};

const GlobalStateContext = createContext(initialState);
const DispatchStateContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    initialState
  );

  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};
export const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext),
];
