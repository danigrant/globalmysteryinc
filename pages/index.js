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
          <p>this is where the magic happens</p>
        </AppContainer>
      </div>
    )
  }
}

export default Index;
