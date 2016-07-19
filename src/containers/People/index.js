import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import styles from './style.scss'
import TransitionGroup from 'react-addons-css-transition-group'

function Person({displayName, photoURL}) {
  photoURL = photoURL || 'https://u.o0bc.com/avatars/stock/_no-user-image.gif'
  return <div className={styles.person}>
    <img className={styles.personImage} src={photoURL} />
    <div className={styles.personName}>{displayName}</div>
  </div>
}

Person.propTypes = {
  displayName: PropTypes.string.isRequired,
  photoURL: PropTypes.string
}

function People({people}) {
  return (
    <div>
      <TransitionGroup transitionName={{
        enter: styles.personEnter,
        enterActive: styles.personEnterActive,
        leave: styles.personLeave,
        leaveActive: styles.personLeaveActive
      }} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {people.map(({uid, ...props}) => <Person {...props} key={uid} />)}
      </TransitionGroup>
    </div>
  )
}

People.propTypes = {
  people: PropTypes.array.isRequired
}

function mapStateToProps({people}) {
  return {people}
}

export default connect(mapStateToProps)(People)
