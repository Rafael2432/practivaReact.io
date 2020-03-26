import React, { useState, useEffect, useMemo } from "react";
import "../../styles/css/pgUserList.css";
import UserList from "../principalComponents/userList.js";
import Button from "../secundaryComponents/button";
import Loader from "../secundaryComponents/loader.js";
import MoreCharacters from "../secundaryComponents/moreCharacters";
import Search from "../principalComponents/search.js";

export default function PgUserList(props) {
  const [state, peticion] = useTry();
  const [query, setQuery, filteredResults] = useFilteredResults(
    state.data.results
  );
  // const [placeholderColor] = usePlaceholderColor("orange");

  useEffect(() => {
    peticion();
  }, []);

  if (!state.error && state.loading) {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  } else if (!state.error && !state.loading) {
    return (
      <React.Fragment>
        <Search query={query} setQuery={setQuery} />
        {query === "" ? (
          <UserList data={state.data.results} />
        ) : (
          <UserList data={filteredResults} />
        )}

        <div className="estorbo2">
          <Button class="buttonList" to="/users/new">
            New user
          </Button>
          <MoreCharacters click={peticion} />
        </div>
      </React.Fragment>
    );
  } else {
    return <h1>Error ocurred</h1>;
  }
}

function useFilteredResults(results) {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    const filter = results.filter(character => {
      return character.name.toLowerCase().includes(query.toLowerCase());
    });

    return filter;
  }, [query, results]);

  return [query, setQuery, filteredResults];
}

function useTry(query) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    nextPage: 1,
    data: {
      results: []
    }
  });

  async function peticion() {
    try {
      setState(prevState => {
        return {
          ...prevState,
          loading: true,
          error: null
        };
      });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${state.nextPage}`
      );
      const data = await response.json();
      setState(prevState => {
        return {
          ...prevState,
          loading: false,
          nextPage: state.nextPage + 1,
          data: {
            info: data.info,
            results: [].concat(state.data.results, data.results)
          }
        };
      });
    } catch (error) {
      setState({
        ...state,
        error: error
      });
    }
  }

  return [state, peticion];
}
