import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import  style from './DefaultLayout.module.css';
function DefaultLayout({ children }) {
  return (
    <section className={style.BookstoreCMSBG}>
      <main className={style.panelbgmain}>
          <header className={style.headerComponent} >
            <span className={style.BookstoreCMS}>
            Bookstore CMS
            </span>
            <nav>
              <ul>
                <li className={`${style.BOOKS} ${style.TextStyle3}`}>
                  <Link to="/books">BOOKS</Link></li>
                <li className={`${style.CATEGORIES} ${style.TextStyle3}`}>
                  <Link to="/categories">CATEGORIES </Link></li>
              </ul>
            </nav> 
          </header>
          <section>
            {children}
          </section>
      </main>
    </section>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
