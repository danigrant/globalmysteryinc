import React from 'react'
import AppContainer from '../components/AppContainer'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
      element.style.boxSizing = 'border-box';
      var offset = element.offsetHeight - element.clientHeight;
      document.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });
      element.removeAttribute('data-autoresize');
    });
  }
  render() {
    return (
      <div>
        <AppContainer>
          <div className="title-section-wrapper center">
            <h1 className="font-lrg">Serious question.</h1>
            <h1 className="font-lrg">What would you like explained?</h1>
            <h2 className="font-color-grey">Welcome to a project where we listen to your mysteries and then kick off a tournament to explain them.</h2>
          </div>
          <div className="card-section-wrapper font-sml">
            <form className="margin-bottom-med">
              <div className="field-wrap margin-bottom-sml">
                <label className="how-label">How would you explain</label>
                <textarea data-autoresize rows="1" type="text" placeholder="how does popcorn work"></textarea>
              </div>
              <div className="field-wrap margin-bottom-sml">
                <label>to a</label>
                <textarea data-autoresize rows="1" type="text" placeholder="space alien who has never visited earth"></textarea>
              </div>
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
