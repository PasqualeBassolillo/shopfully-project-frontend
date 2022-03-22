import React from 'react';
import FlyersGrid from './FlyersGrid';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';

class Flyers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flyers: [],
      pagination: [

      ],
      path: '/flyers',
      isLoading: false,
      hasMore: true,
      error: '',
      page: 1,
      wishlist: [],
    };
  }

  componentDidMount() {
    // fetch data from api and set page for infinite scroll
    this.getFlyers();
    // for material design loader component
    window.componentHandler.upgradeAllRegistered()
  }

  getFlyers() {
    const path = '/flyers?page=' + this.state.page + '&limit=100';

    fetch(process.env.REACT_APP_SERVER_URL + path)
      .then(response => {
        if (response.ok)
          // for spinner loader
          window.componentHandler.upgradeAllRegistered();

        return response.json();
        throw new Error('Request failed.');
      })
      .then(results => {
        // set the props
        this.setState({
          flyers: [...this.state.flyers, ...results.data],
          pagination: results.pagination,
          hasMore: results.pagination.next !== '',
          page: this.state.page + 1
        });

      })
      .catch(error => {
        // set error props
        this.setState({
          error: error.message,
        });
      });
  }

  onWishlistChange(items) {
    this.props.onWishlistChange(items);
  }

  render() {
    const flyers = this.state.flyers;

    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          {(() => {
            if(this.state.error.length > 0) {
              return (
                <ErrorState reconnect={this.getFlyers} />
              )
            } else {
              if (this.state.flyers.length > 0 ) {
                return (
                  <FlyersGrid
                    flyers={this.state.flyers}
                    getFlyers={this.getFlyers.bind(this)}
                    hasMore={this.state.hasMore}
                    onWishlistChange={this.onWishlistChange.bind(this)} />
                )
              } else if (this.state.flyers.length > 0 && !this.state.isLoading) {
                return (
                  <EmptyState />
                )
              }
            }
          })()}
        </div>
      </main>
    )


  }
}

export default Flyers;