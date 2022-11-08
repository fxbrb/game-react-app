import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = (number) => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL(number));
  const newGamesData = await axios.get(newGamesURL(number));
  const upcomingData = await axios.get(upcomingGamesURL(number));

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

// Get game from API
export const fetchSearch = (game_name, number) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name, number));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
