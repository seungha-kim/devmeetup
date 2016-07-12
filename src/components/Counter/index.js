import React, {PropTypes} from 'react'

const Counter = ({onClick, count}) => (
  <div>
    <button onClick={onClick}>Increment!</button>
    <div>{count}</div>
  </div>
)

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter
