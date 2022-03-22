import React from 'react';
import {ImSad} from "react-icons/im";

class Emptystate extends React.Component {

  render() {
    return (
      <div>
        {(
          () => {
            if (this.props.type === 'error') {
              return (
                <div className="empty-state__content">
                  <div className="empty-state__card demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="empty-state__title mdl-card__title">
                      <h2 className="mdl-card__title-text">Ops, c'è stato un errore!</h2>
                      <span className="empty-state__icon"><ImSad /></span>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-button--raised"
                      onClick={this.props.reconnect}
                      >
                        Riprova
                      </button>
                  </div>
                </div>
              )
            } else if (this.props.type === 'empty') {
              return (
                <div className="empty-state__content">
                  <div className="empty-state__card demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="empty-state__title mdl-card__title">
                      <h2 className="mdl-card__title-text">Non ci sono volantini!</h2>
                      <span className="empty-state__icon"><ImSad /></span>
                    </div>
                  </div>
                </div>
              )
            }
          })()
        }
        
      </div>
    )
  }
}

export default Emptystate;
