import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
  authSignInTry,
  authSignOutTry
} from '../../actions/auth'

const Auth = ({currentUser, message, authSignInTry, authSignOutTry}) => (
  <div>
    {currentUser
      ? <button onClick={() => authSignOutTry()}>Sign out</button>
      : <button onClick={() => authSignInTry()}>Sign In</button>}
    <div>{message}</div>
    {currentUser ? (
      <div>
        <div>{currentUser.displayName}</div>
        <div>{currentUser.email}</div>
        <img src={currentUser.photoURL} />
      </div>
    ) : null}
  </div>
)

Auth.propTypes = {
  // states
  currentUser: PropTypes.object,
  message: PropTypes.string.isRequired,
  // action creators
  authSignInTry: PropTypes.func.isRequired,
  authSignOutTry: PropTypes.func.isRequired
}

function mapStateToProps({auth: {currentUser, message}}) {
  return {currentUser, message}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authSignInTry, authSignOutTry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
