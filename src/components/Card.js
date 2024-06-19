import React from 'react';
import { FaHeart } from "react-icons/fa";
import { getItem, setItem } from "../utils/storage";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import withNavigate from '../utils/withNavigate';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: Math.floor(Math.random() * (800 - 400 + 1)) + 400,
      width: Math.floor(Math.random() * (800 - 400 + 1)) + 400,
      isInWishlist: this.isInWishlist(this.props.item),
    };

    this.addToFav.bind(this);
  }

  addToFav(item) {
    var wishlist = getItem('FAVOURITES_LIST');

    if (wishlist.length === 0) {
      wishlist.push(item);

      this.setState({ isInWishlist: true });
    } else {
      const found = wishlist.find(element => {
        return element.id === item.id;
      });

      if (found) {
        var updateWishlist = wishlist.filter(favourite => {
          return item.id !== favourite.id;
        })
        wishlist = updateWishlist;
        this.setState({ isInWishlist: false })

      } else {
        wishlist.push(item);
        this.setState({ isInWishlist: true })
      }
    }

    this.props.onWishlistChange(wishlist);
    setItem('FAVOURITES_LIST', wishlist)
  }

  isInWishlist(item) {
    var wishlist = getItem('FAVOURITES_LIST');

    if (wishlist !== null) {
      var found = wishlist.find(element => {
        return element.id === item.id;
      });
      return found;
    }
  }

  navigateToDetails(id) {
    this.props.navigate(`/flyers/${id}`);
  };


  render() {
    return (
      <>
        <div className="item-card demo-card-square mdl-shadow--2dp">
          <div className="mdl-card__image mdl-card--expand">
            <LazyLoadImage src={`https://picsum.photos/seed/${this.props.item.id}/${this.state.width}/${this.state.height}`}
              alt={this.props.item.title}
              effect="blur"
            />
          </div>

          <div className="mdl-card__supporting-detail mdl-card__supporting-text">
            <div className="mdl-card__span text--uppercase mdl-color-text--black mdl-typography--caption">
              <span>{this.props.item.retailer}</span>
            </div>
            <div className="mdl-card__text mdl-typography--font-bold">
              <h2
                className="mdl-card__title title--small"
                onClick={() => this.navigateToDetails(this.props.item.id)}
                style={{ cursor: 'pointer' }}
              >{this.props.item.title}</h2>
            </div>
            <div className="mdl-card__span mdl-typography--caption">
              <span>{this.props.item.category}</span>
            </div>
            <div className="mdl-card__action">
              <span onClick={() => { this.addToFav(this.props.item) }}
                className={(this.state.isInWishlist ? 'active' : '')}
              >
                <FaHeart />
              </span>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default withNavigate(Card);