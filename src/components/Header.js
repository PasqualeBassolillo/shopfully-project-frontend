import React, { Component } from 'react';
import PlaceholderImage from '../assets/img/placeholder-user.png';
import { FaHeart } from "react-icons/fa";
import { getItem } from "../utils/storage";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlist : this.props.getWishlist,
    }
  }

  renderList () {
    this.props.getWishlist.map(item => {
      return (
        <li key={item.id} className="item">
          <span className="item__icon"><FaHeart /></span>
          <span className="item__title">{item.title}</span>
        </li>
      )
    })
  }
  
  render() {
    return (
      <>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">ShopFully</span>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <div className="drawer__header">
            <div className="drawer__placeholder">
              <img src={PlaceholderImage} />
            </div>
            <div className="drawer__title">
              <span className="mdl-layout-title">Favourites</span>
            </div>
            <div className="drawer__text">
              <span className="drawer__span">The list of your preferred Flyers</span>
            </div>
          </div>
          <div className="drawer__navigation">
            <nav className="mdl-navigation">
              <ul className="navigation__list">
                {
                 (this.props.getWishlist.length > 0) ?
                    this.props.getWishlist.map(item => {
                      return (
                        <li key={item.id} className="item">
                          <span className="item__icon"><FaHeart /></span>
                          <span className="item__title">{item.title}</span>
                        </li>
                      )
                    })
                  :
                  <li >
                    <span className="item__title">Non ci sono preferiti</span>
                  </li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
