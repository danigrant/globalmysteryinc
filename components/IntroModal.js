const IntroModal = props => {
    return (
      <div className="intro-modal">
        <i onClick={props.closeIntroModal} className="material-icons intro-modal-close">close_rounded</i>
        <img src={props.data.image} />
        <p className="margin-top-sml font-weight-bold">{props.data.text}</p>
        <div className="nativation-icons">
          {
            props.data.index != 0 &&
            <i onClick={props.prevIntroModal} className="material-icons link intro-modal-navigate-before">navigate_before</i>
          }
          <i onClick={props.nextIntroModal} className="material-icons link intro-modal-navigate-next">navigate_next</i>
        </div>
      </div>
    )
}

export default IntroModal
