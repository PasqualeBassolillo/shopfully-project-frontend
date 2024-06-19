import React from 'react';
import withParams from '../utils/withParams';
import withNavigate from '../utils/withNavigate';

class FlyerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flyer: null,
      error: null,
    };

    this.navigateToHome = this.navigateToHome.bind(this)
  }

  componentDidMount() {
    this.fetchFlyerDetails(this.props.params.id);
  }

  fetchFlyerDetails(id) {
    const path = `/flyers/${id}`;
    fetch(process.env.REACT_APP_SERVER_URL + path)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed.');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ flyer: data, error: null });
      })
      .catch(error => {
        this.setState({ flyer: null, error: 'Error fetching flyer details' });
      });
  }

  navigateToHome() {
    this.props.navigate('/');
  }

  render() {
    const { flyer, error } = this.state;
    const imageUrl = `https://picsum.photos/seed/${this.props.params.id}/1024/768`;

    return (
      <main className="mdl-layout__content">
        <div className="demo-layout is-upgraded mdl-color--grey-100 mdl-js-layout mdl-layout mdl-layout--fixed-header">
          {error && <p>{error}</p>}
          {flyer ? (
            <>
              <div className="demo-ribbon" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
              <div className="demo-main mdl-layout__content">
                <div className="demo-container mdl-grid">
                  <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
                  <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                    <div className="breadcrumb">
                      <span
                        onClick={this.navigateToHome}
                        style={{ cursor: 'pointer' }}
                      >
                        Home
                      </span>
                      <span> / </span>
                      <span>
                        {flyer.title}
                      </span>
                    </div>
                    <div className="demo-crumbs mdl-color-text--black-500">
                      <h2>{flyer.title}</h2>
                    </div>
                    <h4>Retailer</h4>
                    <p>
                      {flyer.retailer}
                    </p>
                    <h4>Category</h4>
                    <p>
                      {flyer.category}
                    </p>
                    <h4>Start date</h4>
                    <p>
                      {flyer.start_date}
                    </p>
                    <h4>End date</h4>
                    <p>{flyer.end_date}</p>
                    <h4>Status</h4>
                    <p>
                      {flyer.is_published === "1" ? "Published" : "Unpublished"}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    );
  }
}

export default withNavigate(withParams(FlyerDetails));
