import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import useLocalState from "./hooks/useLocalState";
import axios from "axios";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=893&offset=0`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData: any = [];
        results.forEach((pokemon: any, index: number) => {
          newPokemonData[index + 1] = {
            id: index,
            name: pokemon.name,
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemon(newPokemonData);
      });
  }, []);

  const handleSearch = (e: any) => {
    setFilter(e.target.value.toLowerCase());
  };

  const [theme, setTheme] = useLocalState("theme", light);

  const changeTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  console.log(changeTheme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header changeTheme={changeTheme} />
        <SearchBar onChange={handleSearch} />
        <div className="grid-container">
          {pokemon.map(
            (pokemon: { name: string; id: number; url: string }) =>
              pokemon.name.startsWith(filter) && (
                <Card
                  key={pokemon.id}
                  image={pokemon.url}
                  name={pokemon.name}
                />
              )
          )}
        </div>
        <div className="footer"></div>
      </ThemeProvider>
    </div>
  );
}

export default App;
