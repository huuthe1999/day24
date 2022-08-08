import Loading from "../loading.js";
import "./Header.css";

const Header = ({
  totalCountry,
  countFilterCountry,
  debouncedSearchTerm,
  isLoading
}) => {
  return (
    <header className="header">
      <h2>World Countries Data</h2>
      <div className="header__subtitle">
        Currently, we have{" "}
        {isLoading ? (
          <Loading type="spinningBubbles" width={32} height={32} isCustom />
        ) : (
          totalCountry
        )}{" "}
        countries
        {countFilterCountry > 0 && debouncedSearchTerm && (
          <p className="header__feedback">
            {countFilterCountry} satisfied the search criteria
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
