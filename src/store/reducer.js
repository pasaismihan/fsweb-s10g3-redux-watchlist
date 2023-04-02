import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action";
import { movies } from "../movies";

export const initialState = {
  movies: movies,
  favorites: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        sira: state.sira === 0 ? 0 : state.sira - 1,
        movies: state.movies.filter((mov) => action.payload !== mov),
      };
    case REMOVE_FAVORITE:
      let removedMovie = state.favorites.find(
        (mov) => mov.id === action.payload
      );
      return {
        ...state,
        movies: [removedMovie, ...state.movies],
        favorites: state.favorites.filter((mov) => mov !== removedMovie),
      };
    default:
      return state;
  }
};

export default reducer;
