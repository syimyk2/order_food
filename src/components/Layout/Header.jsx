import React, { Fragment } from 'react';
// import mealsImage from '../../assets/img/img-header.jpg'
import classes from '../Layout/Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return(
  <Fragment>
  <header className={classes.header}>
      <h1>React Meals</h1>
      {/* <button>Cart</button> */}
      <HeaderCartButton  />
  </header>
  <div className={classes['main-image']}><img src={'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="img-header.jpg" /></div>
  </Fragment> )
};

export default Header;
