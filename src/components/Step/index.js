import React, {PropTypes} from 'react'
import makeClassNames from 'classNames'
import styles from './index.scss'

const Step = ({activated, playing, onClick}) => {
  const className = makeClassNames(styles.base, {
    [styles.default]: !(activated || playing),
    [styles.activated]: activated,
    [styles.playing]: playing
  })
  return <div className={className} onClick={onClick} />
}

Step.propTypes = {
  activated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired
}

export default Step
