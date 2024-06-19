import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flyers from './components/Flyers';
import FlyerDetails from './components/FlyerDetails';
import Header from './components/Header';
import { getItem } from "./utils/storage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlist: getItem('FAVOURITES_LIST'),
    };
  }

  onWishlistChange(items) {
    this.setState({ wishlist: items })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header 
              getWishlist={this.state.wishlist}
              onWishlistChange={this.onWishlistChange.bind(this)}
            />
            <Routes>
              <Route path="/" element={<Flyers onWishlistChange={this.onWishlistChange.bind(this)} />} />
              <Route path="/flyers/:id" element={<FlyerDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
