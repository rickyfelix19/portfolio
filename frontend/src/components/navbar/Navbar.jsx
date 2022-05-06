import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div>
        {/* close logo */}
        <ul>
          <li>
            <Link to="/">homepage</Link>
          </li>

          <li>
            <Link to="/">experience</Link>
            experience
          </li>

          <li>
            <Link to="/journey">journey</Link>
          </li>

          <li>
            <Link to="/">send an email</Link>
          </li>

          <li>
            <a href={`https://linktr.ee/rickyfelix019`}>
              download resume
              {/* external page logo */}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p>find me at:</p>
        <div>{/* logos */}</div>
      </div>
    </div>
  );
}
