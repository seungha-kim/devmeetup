import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
  transportPlay,
  transportPause,
  transportStop
} from '../../actions/transport'

const Transport = ({
  playing,
  transportPlay,
  transportPause,
  transportStop
}) => {
  const toggle = (
    playing
    ? () => transportPause()
    : () => transportPlay()
  )
  const toggleText = playing ? 'Pause' : 'Play'
  return <div>
    <button onClick={toggle}>{toggleText}</button>
    <button onClick={() => transportStop()}>Stop</button>
  </div>
}

Transport.propTypes = {
  // states
  playing: PropTypes.bool.isRequired,
  // action creators
  transportPlay: PropTypes.func.isRequired,
  transportPause: PropTypes.func.isRequired,
  transportStop: PropTypes.func.isRequired
}

function mapStateToProps({transport: {playing}}) {
  return {playing}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    transportPlay,
    transportPause,
    transportStop
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transport)
