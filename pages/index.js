import React from 'react'
import AppContainer from '../components/AppContainer'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AppContainer>
          <div className="title-section-wrapper center">
            <h1 className="font-lrg">Serious question.</h1>
            <h1 className="font-lrg">What would you like explained?</h1>
            <h2 className="font-color-grey">Welcome to a project where we are sourcing mysteries and then will kick off a tournament to explain them.</h2>
          </div>
          <div className="card-section-wrapper font-sml">
            <form className="margin-bottom-med">
              <label>How would you explain</label>
              <input type="text" placeholder="how does popcorn work" />
              <br />
              <label>to a</label>
              <input type="text" placeholder="space alien who has never visited earth" />
              <br />
            </form>
            <div className="button background-color-purple center" type="submit">Submit Mystery</div>
          </div>
          <img id="bitmoji-image" src="/images/bitmoji-thinking.png" />
        </AppContainer>
      </div>
    )
  }
}

export default Index;
