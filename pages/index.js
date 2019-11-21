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
          </div>
          <div className="card-section-wrapper">
            <form>
              <label>How would you explain</label>
              <input type="text" placeholder="how does popcorn work" />
              <label>to a</label>
              <input type="text" placeholder="space alien who has never visited earth" />
              <button className="button background-color-purple" type="submit">Submit Mystery</button>
            </form>
          </div>
          <img id="bitmoji-image" src="/images/bitmoji-thinking.png" />
        </AppContainer>
      </div>
    )
  }
}

export default Index;
