import React, {PropTypes} from 'react'

const Step = ({activated, onClick}) => (
  <input type='checkbox' checked={activated} onClick={onClick} />
)

Step.propTypes = {
  activated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Step
