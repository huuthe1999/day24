import axios from "axios";
import { useEffect, useState } from "react";
import "./app.css";
import Control from "./components/control/Control";
import CountryList from "./components/country/CountryList/CountryList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import useDebounce from "./components/hooks/useDebounce";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCoutries, setFilterCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchInput, 500);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      const resultCountries = [];
      countries.forEach((country) => {
        // FIlter name
        if (
          country.name.common
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
        ) {
          resultCountries.push(country);
        }
        //Filter capital
        if (
          country.capital?.[0]
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
        ) {
          resultCountries.push(country);
        }
        //Filter language
        if (country.languages) {
          const matchCountry = Object.values(
            country.languages
          ).filter((language) =>
            language.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          );
          if (matchCountry.length >= 1) {
            resultCountries.push(country);
          }
        }
      });

      const resultCoutries = resultCountries.filter(
        (tag, index, array) =>
          array.findIndex((t) => t.name.common === tag.name.common) === index
      );

      setFilterCountries(resultCoutries);
      setIsSearching(false);
    } else {
      setIsSearching(false);
      setFilterCountries(countries);
    }
  }, [debouncedSearchTerm, countries]);
  return (
    <div className="app">
      <Header
        totalCountry={countries.length}
        countFilterCountry={filterCoutries.length}
        debouncedSearchTerm={debouncedSearchTerm !== ""}
        isLoading={isLoading}
      />
      <Control handleChange={handleChange} isLoading={isLoading} />
      <CountryList
        data={filterCoutries}
        isSearching={isSearching}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
