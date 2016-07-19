import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {
  authSignInTry
} from '../../actions/auth'

const Auth = ({authSignInTry, freezing}) => (
  <div>
    <button disabled={freezing} onClick={() => authSignInTry()}>Sign In</button>
  </div>
)

Auth.propTypes = {
  authSignInTry: PropTypes.func.isRequired,
  freezing: PropTypes.bool.isRequired
}

function mapStateToProps({auth: {freezing}}) {
  return {freezing}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authSignInTry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
