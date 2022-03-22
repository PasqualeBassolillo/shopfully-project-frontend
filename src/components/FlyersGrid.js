import React from 'react';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

class FlyersGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      wishlist: [],
    };
  }

  onWishlistChange(items) {
    this.props.onWishlistChange(items);
  }

  render() {
    const flyers = this.props.flyers;

    return (
      <InfiniteScroll
        dataLength={this.props.flyers.length}
        next={this.props.getFlyers}
        hasMore={this.props.hasMore}
        loader={
        <div className="loader--full-screen">
          <div className="mdl-spinner mdl-js-spinner is-active element-fixed--center"></div>
        </div>
        }
        className='mdl-grid'
      >
        {
          flyers.filter(function(flyers) {
            return flyers.is_published == "1";
          }).map(flyer => {
            return (
              <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--2-col-phone" 
                    key={flyer.id}>
                <Card onWishlistChange={this.onWishlistChange.bind(this)} item={flyer} />
              </div>
            )
          })
        }
      </InfiniteScroll>
    )
  }
}

export default FlyersGrid;