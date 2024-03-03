import { useState } from "react";

export default function Navbar (){
  const [query, setQuery] = useState('');

    return (
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍥</span>
          <h1>WeeBoo</h1>
          <span role="img">🍥</span>
        </div>
        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="search-results">
            Found <strong>4</strong> results
          </p>
        </div>
      </nav>
    );
}