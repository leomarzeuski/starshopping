import { CoffeeCard } from "../CoffeeCard";
import { TitleText } from "../Typography";
import "./styles.scss";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { options, todos } from "../../mock/starwars.mock";
import ColorTabs from "../Menu";
import PaginatedItems from "../Pagination";
import { get } from "../../services/axios";

const GET_PEOPLE = gql`
  query GetPeople($page: Int) {
    allPeople(page: $page) {
      results {
        name
      }
      previous
      next
      count
    }
  }
`;

const GET_FILMS = gql`
  query GetFilm($page: Int) {
    allFilms(page: $page) {
      results {
        title
      }
      count
      next
      previous
    }
  }
`;

const GET_PLANETS = gql`
  query GetPlanets($page: Int) {
    allPlanets(page: $page) {
      count
      next
      previous
      results {
        name
      }
    }
  }
`;

const GET_SPECIES = gql`
  query GetSpecies($page: Int) {
    allSpecies(page: $page) {
      count
      results {
        name
      }
    }
  }
`;

const GET_VEHICLES = gql`
  query GetVehicles($page: Int) {
    allVehicles(page: $page) {
      count
      results {
        name
      }
    }
  }
`;

const GET_STARSHIPS = gql`
  query GetStarhips($page: Int) {
    allStarships(page: $page) {
      count
      results {
        name
      }
    }
  }
`;

export function OurCoffees() {
  const [page, setPage] = useState<number>(1);
  const [showInfo, setShowInfo] = useState(GET_PEOPLE);
  const [value, setValue] = useState("people");
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useQuery(showInfo, {
    variables: { page: page },
  });

  useEffect(() => {
    if (!data) return;
    switch (value) {
      case "people":
        setResults(data?.allPeople?.results);
        break;
      case "films":
        setResults(data?.allFilms?.results);
        break;
      case "planets":
        setResults(data?.allPlanets?.results);
        break;
      case "species":
        setResults(data?.allSpecies?.results);
        break;
      case "vehicles":
        setResults(data?.allVehicles?.results);
        break;
      case "starships":
        setResults(data?.allStarships?.results);
        break;
      default:
        setResults([]);
        break;
    }
  }, [value, data]);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handleTagChange = (value: string) => {
    setPage(1);
    setValue(value);
    switch (value) {
      case "people":
        setShowInfo(GET_PEOPLE);
        break;
      case "films":
        setShowInfo(GET_FILMS);
        break;
      case "planets":
        setShowInfo(GET_PLANETS);
        break;
      case "species":
        setShowInfo(GET_SPECIES);
        break;
      case "vehicles":
        setShowInfo(GET_VEHICLES);
        break;
      case "starships":
        setShowInfo(GET_STARSHIPS);
        break;
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!data) return;

    let filteredResults = [];
    switch (value) {
      case "people":
        filteredResults = data.allPeople.results.filter(
          ({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case "films":
        filteredResults = data.allFilms.results.filter(
          ({ title }) =>
            title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case "planets":
        filteredResults = data.allPlanets.results.filter(
          ({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case "species":
        filteredResults = data.allSpecies.results.filter(
          ({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case "vehicles":
        filteredResults = data.allVehicles.results.filter(
          ({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      case "starships":
        filteredResults = data.allStarships.results.filter(
          ({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        break;
      default:
        break;
    }

    setResults(filteredResults);
  }, [value, data, searchTerm]);

  return (
    <>
      <div className="OurCoffeesContainer container">
        <TitleText size="l" color="subtitle">
          Nossos Produtos
        </TitleText>
        <input
          type="text"
          className="input"
          placeholder="Text"
          value={searchTerm}
          onChange={handleChange}
        />
        {data && searchTerm.length === 0 && (
          <ColorTabs selectedtab={handleTagChange} />
        )}
        {data && (
          <PaginatedItems
            itemsPerPage={10}
            key={1}
            items={results}
            count={
              data?.allPeople?.count ||
              data?.allFilms?.count ||
              data?.allPlanets?.count ||
              data?.allSpecies?.count ||
              data?.allVehicles?.count ||
              data?.allStarships?.count
            }
            handlePageChange={handlePageChange}
            get={value}
          />
        )}
      </div>
    </>
  );
}
