import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Step from '../../components/Step'
import {stepOn, stepOff} from '../../actions/step'

const Sequencer = ({sequencer, transport, stepOn, stepOff}) => (
  <div>
    {sequencer.map((activated, index) => {
      const playing = index === transport
      let onClick = () => {
        if (activated) {
          stepOff(index)
        } else {
          stepOn(index)
        }
      }
      return <Step activated={activated} playing={playing} onClick={onClick} key={index} />
    })}
  </div>
)

Sequencer.propTypes = {
  // states
  sequencer: PropTypes.object.isRequired,
  transport: PropTypes.number.isRequired,
  // action creators
  stepOn: PropTypes.func.isRequired,
  stepOff: PropTypes.func.isRequired
}

function mapStateToProps({sequencer, transport}) {
  return {sequencer, transport}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({stepOn, stepOff}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer)
