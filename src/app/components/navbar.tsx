import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">MiSitio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  legacyBehavior href="/weather" passHref>
              <a className="nav-link">Clima</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link legacyBehavior  href="/pokemon" passHref>
              <a className="nav-link">Pokémon</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="/joke" passHref>
              <a className="nav-link">Chiste</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;