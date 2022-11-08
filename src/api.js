// Base URL
const key = `${process.env.REACT_APP_RAWG_API}`;
const key_url = `key=${key}`;
const BASE_URL = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=`;
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=`;

export const popularGamesURL = (number) =>
  `${BASE_URL}${popular_games}${number}`;
export const upcomingGamesURL = (number) =>
  `${BASE_URL}${upcoming_games}${number}`;
export const newGamesURL = (number) => `${BASE_URL}${newGames}${number}`;
// Game details

export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}?&${key_url}`;

export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?&${key_url}`;
// Searched game

export const searchGameURL = (game_name, number) =>
  `${BASE_URL}games?${key_url}&search=${game_name}&page_size=${number}`;
