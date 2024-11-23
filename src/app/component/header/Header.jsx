import React from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faHouse, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function header() {
  return (
    <header id="headerElement" className="flex">
    <div className="logo">
      <FontAwesomeIcon className="fa-solid fa-bag-shopping" style={{width:"1rem"}} icon={faBagShopping} />
      <span style={{ fontWeight: "bold" }}>AWU</span>
      <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
    </div>
    <nav className="links">
      <Link
        style={{ position: "relative" }}
        className="cart"
        href="../../cart"
      >
        <FontAwesomeIcon className="fa-solid fa-cart-shopping"  style={{width:"0.8rem"}} icon={faCartShopping} />
        $0.00
        <span className="products-number">2</span>
      </Link>
      <Link className="sign-in" href="../../signin">
        <i className="fa-solid fa-right-to-bracket" />
        <FontAwesomeIcon className="fa-solid fa-right-to-bracket" style={{width:"0.8rem"}} icon={faRightToBracket} />
        Sign in
      </Link>
      <Link className="register" href="../../register">
        <i className="fa-solid fa-user-plus" />
        <FontAwesomeIcon className="fa-solid fa-user-plus"  style={{width:"0.8rem"}} icon={faUserPlus} />
        Register
      </Link>
    </nav>
  </header>
  )
}
