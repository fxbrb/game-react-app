import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Games from "../components/Games";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";

function Home() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames(10));
  }, [dispatch]);

  // Display data from store
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.rootReducer.games
  );

  const filterHandler = (number) => {
    dispatch(loadGames(number));
  };

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <Filter>
        <h3>Affiner la recherche</h3>
        <button
          className={`${upcoming.length === 3 ? "active-filter" : ""}`}
          onClick={() => filterHandler(3)}
        >
          3
        </button>
        <button
          className={`${upcoming.length === 5 ? "active-filter" : ""}`}
          onClick={() => filterHandler(5)}
        >
          5
        </button>
        <button
          className={`${upcoming.length === 10 ? "active-filter" : ""}`}
          onClick={() => filterHandler(10)}
        >
          10
        </button>
      </Filter>
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length > 0 ? (
          <div className="searched">
            <h2>Jeux recherchés</h2>
            <GamesCard>
              {searched.map((game) => (
                <Games
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                />
              ))}
            </GamesCard>
          </div>
        ) : (
          ""
        )}

        <h2>Jeux à venir</h2>
        <GamesCard>
          {upcoming.map((game) => (
            <Games
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesCard>
        <h2>Jeux populaires</h2>
        <GamesCard>
          {popular.map((game) => (
            <Games
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesCard>
        <h2>Nouveaux jeux</h2>
        <GamesCard>
          {newGames.map((game) => (
            <Games
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </GamesCard>
      </LayoutGroup>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const GamesCard = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Filter = styled(motion.div)`
  button {
    padding: 0.5rem 1rem;
    border: 1px solid #333;
    border-radius: 0.5rem;
    background: none;
    cursor: pointer;
    margin-right: 1rem;
    transition: 0.3s ease;
  }
`;

export default Home;
