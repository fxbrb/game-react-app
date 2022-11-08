import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/manette.png";
import { fadeIn } from "../animation";
// Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  // Get input value
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  //  Fectching data
  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(fetchSearch(textInput));
      setTextInput("");
    } else {
      dispatch({ type: "CLEAR_SEARCHED" });
    }
  };

  // Remove searched section when we click on logo
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img src={logo} alt="" onClick={clearSearched} />
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Rechercher
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.45rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    outline: none;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    box-shadow: 0 0 30px rgba(62, 141, 202, 0.5);
    background-color: #3e8dca;
    color: white;
    transition: 0.4s ease-in-out;

    &:hover {
      background-color: white;
      color: #333;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;

export default Nav;
