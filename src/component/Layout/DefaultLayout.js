import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return (
    <section>

      <header>
        <nav>
          <ul>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </section>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
