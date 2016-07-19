import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Step from '../../components/Step'
import {stepOnTry, stepOffTry} from '../../actions/step'

const label = ['Kick', 'Hihat', 'Clap', 'Cymbal']

const Sequencer = ({sequencer, pos, stepOnTry, stepOffTry}) => (
  <div>
    {sequencer.map((track, trackNum) => {
      return <div style={{display: 'flex'}} key={trackNum}>
        <div style={{display: 'inline-block', width: 50, fontSize: 12, lineHeight: '25px'}}>{label[trackNum]}</div>
        {track.map((activated, noteNum) => {
          const playing = noteNum === pos
          const pending = typeof activated === 'object'
          let onClick = () => {
            if (activated === true) {
              stepOffTry({trackNum, noteNum})
            } else if (activated === false) {
              stepOnTry({trackNum, noteNum})
            } else if (pending) {
              return
            } else {
              throw new Error('Unexcepted prop - activated')
            }
          }
          return <Step activated={activated} playing={playing} pending={pending} onClick={onClick} key={noteNum} />
        })}
      </div>
    })}
  </div>
)

Sequencer.propTypes = {
  // states
  sequencer: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired,
  // action creators
  stepOnTry: PropTypes.func.isRequired,
  stepOffTry: PropTypes.func.isRequired
}

function mapStateToProps({sequencer, transport: {pos}}) {
  return {sequencer, pos}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({stepOnTry, stepOffTry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer)
