import React, {PropTypes} from 'react'
import makeClassNames from 'classNames'
import styles from './index.scss'

const Step = ({activated, playing, onClick, pending}) => {
  const className = makeClassNames(styles.base, {
    [styles.default]: !activated,
    [styles.activated]: activated,
    [styles.playing]: playing,
    [styles.pending]: pending
  })
  return <div className={className} onClick={onClick} />
}

Step.propTypes = {
  activated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  pending: PropTypes.bool
}

export default Step
