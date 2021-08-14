import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
        <div style={{ position: 'fixed', inset: '0px', backgroundColor: 'transparent'}}>
          <div style={{ position: 'absolute', inset: '200px', border: '1px solid rgb(204, 204, 204)', background: 'trasnparent', overflow: 'auto',  outline: 'none', padding: '20px'}}>
             {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage