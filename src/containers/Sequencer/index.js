import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Step from '../../components/Step'
import {stepOn, stepOff} from '../../actions/step'

const Sequencer = ({sequencer, stepOn, stepOff}) => (
  <div>
    {sequencer.map((activated, index) => {
      let onClick = () => {
        if (activated) {
          stepOff(index)
        } else {
          stepOn(index)
        }
      }
      return <Step activated={activated} onClick={onClick} key={index} />
    })}
  </div>
)

Sequencer.propTypes = {
  sequencer: PropTypes.object.isRequired,
  stepOn: PropTypes.func.isRequired,
  stepOff: PropTypes.func.isRequired
}

function mapStateToProps ({sequencer}) {
  return {sequencer}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({stepOn, stepOff}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer)
