import React from 'react'
import AppContainer from '../components/AppContainer'
import posed from 'react-pose';
import Confetti from 'react-dom-confetti';

const ExpandableBox = posed.div({
  expanded: { marginTop: 0 },
  contracted: { marginTop: 30 }
})

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: '',
      audience: '',
      email: '',
      twitter: '',
      anonymity: false,
      formIsActive: false,
      formSubmitted: false,
      confetti: false
    }
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
  handleFormActive = () => {
    this.setState({ formIsActive: true })
  }
  handleTopicChange = e => {
    this.setState({ topic: e.target.value })
  }
  handleAudienceChange = e => {
    this.setState({ audience: e.target.value })
  }
  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  handleTwitterChange = e => {
    this.setState({ twitter: e.target.value })
  }
  handleAnonymityChange = e => {
    this.setState({ anonymity: !this.state.anonymity })
  }
  handleSubmit = e => {
    e.preventDefault();
    fetch('https://en7zz3uf5iumrri.m.pipedream.net', {
      method: 'POST',
      body: JSON.stringify({
        "anonymous": this.state.anonymity.toString(),
        "twitter_handle": this.state.twitter,
        "email": this.state.email,
        "mystery": this.state.topic,
        "mystery_audience": this.state.audience
      })
    })
    // reset form
    this.setState({
      topic: '',
      audience: '',
      email: '',
      twitter: '',
      anonymity: false,
      formIsActive: false,
      formSubmitted: true
    })

    // wait a bit and then trigger the confetti
    let thisRef = this
    setTimeout(function(){ thisRef.setState({ confetti: true }) }, 150);
  }
  handleReplay = (e) => {
    this.setState({
      formSubmitted: false,
      formIsActive: false
    })
  }
  render() {
    if (this.state.formSubmitted) {
      return (
        <div>
          <AppContainer>
            <div>
              <Confetti className="confetti" active={ this.state.confetti } config={ confettiConfig }/>
            </div>
            <div className="modal">
              <img src="/images/bitmoji-amazing.png" />
              <p className="font-sml font-weight-bold margin-top-sml">That is a <span className="font-color-purple"> fantastic</span> mystery. It’s been submitted to global mystery headquarters.</p>
              <div className="button margin-top-med background-color-twitter-blue">
                <svg className="twitter-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                <p className="margin-left-sml margin-right-sml">
                  <span className="lg-view">Share Your Mystery With The Twitterverse</span>
                  <span className="sm-view">Share Mystery With Twitter</span>
                </p>
              </div>
              <div onClick={this.handleReplay} className="play-again link margin-top-med font-color-grey">
                <i className="material-icons">replay_rounded</i>
                <p>Have another mystery?</p>
              </div>
            </div>
          </AppContainer>
        </div>
      )
    } else {
      return (
        <div>
          <AppContainer>
            {
              !this.state.formIsActive &&
              <div className="title-section-wrapper center">
                <h1 className="font-lrg">Serious question.</h1>
                <h1 className="font-lrg">What would you like explained?</h1>
                <h2 className="font-color-grey">Welcome to a project where we listen to your mysteries and then kick off a tournament to explain them.</h2>
              </div>
            }
            <ExpandableBox onClick={this.handleFormActive} pose={this.state.formIsActive ? 'expanded' : 'contracted'} className="card-section-wrapper font-sml">
              <form className="margin-bottom-med">
                <div className="field-wrap margin-bottom-sml">
                  <label className="how-label">How would you explain</label>
                  <textarea className="input-with-center-text" value={this.state.topic} onChange={this.handleTopicChange} data-autoresize rows="1" type="text" placeholder="how does popcorn work"></textarea>
                </div>
                <div className="field-wrap margin-bottom-sml">
                  <label>to a</label>
                  <textarea className="input-with-center-text" value={this.state.audience} onChange={this.handleAudienceChange} data-autoresize rows="1" type="text" placeholder="space alien who has never visited earth"></textarea>
                </div>
                {
                  this.state.formIsActive &&
                  <div>
                    <div className="margin-top-lrg margin-bottom-sml">
                      <div className="full-row-width"><label className="constrained-width-input">Who are you on email:</label></div>
                      <input className="constrained-width-input" value={this.state.email} onChange={this.handleEmailChange} type="text" placeholder="mayor@dani.town" />
                    </div>
                    <div className="margin-top-med margin-bottom-sml">
                      <div className="full-row-width"><label className="constrained-width-input">Who are you on twitter:</label></div>
                      <input className="constrained-width-input" value={this.state.twitter} onChange={this.handleTwitterChange} type="text" placeholder="@thedanigrant" />
                    </div>
                    <div className="margin-top-lrg margin-bottom-sml">
                      <input className="checkbox" value={this.state.anonymity} onChange={this.handleAnonymityChange} type="checkbox" checked={!this.state.anonymity} />
                      <p>You can attribute this mystery to me.</p>
                    </div>
                  </div>
                }
              </form>
              <div onClick={this.handleSubmit} className="margin-top-lrg button background-color-purple center" type="submit">Submit Mystery</div>
            </ExpandableBox>
            <img id="bitmoji-image" src="/images/bitmoji-thinking.png" />
          </AppContainer>
        </div>
      )
    }
  }
}

export default Index;
