import React from 'react';
import {ImSad} from "react-icons/im";

class Emptystate extends React.Component {

  render() {
    return (
      <div>
        <div className="empty-state__content">
            <div className="empty-state__card demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="empty-state__title mdl-card__title">
                <h2 className="mdl-card__title-text">Non ci sono volantini!</h2>
                <span className="empty-state__icon"><ImSad /></span>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Emptystate;
