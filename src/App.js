import React, { Component } from 'react';
import Flyers from './components/Flyers';
import Header from './components/Header';
import { getItem } from "./utils/storage";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      wishlist: getItem('FAVOURITES_LIST'),
    };
  }

  onWishlistChange(items) {
      this.setState({wishlist : items})
  }

  render () {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header getWishlist={this.state.wishlist}
            onWishlistChange={this.onWishlistChange.bind(this)}
          />
          <Flyers onWishlistChange={this.onWishlistChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
